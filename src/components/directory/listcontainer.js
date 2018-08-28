import htmlToELement from 'html-to-element';
import SearchBox from './search';
import fetchData from '../../utils/fetchData';
import listItem from './listItem/listItem';
import loadMoreButton from './showMore/showMore';

export default class SiteList{
    constructor(element){
        
        // const listElement = myList.createListHtml();
        // element.appendChild(listElement);
        this.itemClass=new listItem();
        this.$showMoreButton=new loadMoreButton();

        this.listContainer= document.querySelector(element);
        const listElement = this.createListHtml();
        this.listContainer.appendChild(listElement);

        let $searchBar = this.listContainer.querySelector('.accordion__head');
        this.$baseElement = element;
        this.$searchBox=new SearchBox($searchBar);

        this.$searchBox.onChange = (keyWord) => {
            // Called every time a new word is searched
            this.keyWord=keyWord;
            this.amount=0;
            this.loadSites();
        };

        
        this.keyWord="pizza";
        this.amount=0;
        this.loadSites();
    }
    
    createListHtml() {
        const listElement = htmlToELement(`
        <div class="accordion  accordion--open">
            <div class=" accordion__head ">gesuchte Webseiten
            </div>
            <div  class="accordion__body">
                <div id="accordionBody" >
               </div>
                <div class="accordion__content">
                </div>
            </div>
        </div>
        `);
        //t 
    

        listElement.querySelector('.accordion__content').appendChild(
            this.$showMoreButton.loadMoreHtml(()=>{ //t
                // only increases the number of skipped results
                this.amount+=8;
                //t to if this.amount=== in loadsites
                this.loadSites();
            })
        );
        console.log("listitem", listElement);
        return listElement;
    }

    async loadSites(){
        chayns.hideWaitCursor();
        let result=  await fetchData(this.keyWord, this.amount);
        if(this.amount===0){// amount is only 0 if a new word is searched 
            document.querySelector("#accordionBody").innerHTML='';// clear accordion__body
            // create a notfound response using .len func
        }
        this.displayResult(result);
    }

	displayResult(result){
        const $resultBody = document.querySelector("#accordionBody");
        
		for (let i = 0; i < result.length; i++) {
            $resultBody.appendChild(
                this.itemClass.createItemHtml(result[i].siteId,result[i].appstoreName)
            )
		}
    }
}