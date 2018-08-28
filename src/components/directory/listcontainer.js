import htmlToELement from 'html-to-element';
import SearchBox from './search';
import fetchData from '../../utils/fetchData';
import listItem from './listtem/listItem';
import loadMoreButton from './showMore/showMore';

export default class SiteList{
    constructor(){
        this.$searchBox=new SearchBox();
        this.itemClass=new listItem();
        this.$showMoreButton=new loadMoreButton();
        this.keyWord="pizza";
        this.amount=0;

        this.loadSites();
    }
    
    createListHtml() {
        const listElement = htmlToELement(`
        <div class="accordion accordion--open">
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

        console.log("CreateSearchHtml check", this.$searchBox.createSearchHtml());
        listElement.querySelector('.accordion__head').appendChild(this.$searchBox.createSearchHtml((keyWord)=>{
            this.keyWord=keyWord;
            this.amount=0;
            this.loadSites();
        }));

        listElement.querySelector('.accordion__content').appendChild(this.$showMoreButton.loadMoreHtml(()=>{
            this.amount+=8;
            this.loadSites();
        }))
        console.log("listitem", listElement);
        return listElement;
    }

    async loadSites(){
        chayns.hideWaitCursor();
        console.log("hello hussain", this.keyWord);
        let result=  await fetchData(this.keyWord, this.amount);
        console.log("keyWord", result);
       if(this.amount===0){
        document.querySelector("#accordionBody").innerHTML="";
       }
        this.displayResult(result);
    }

	displayResult(result){
        const $resultBody = document.querySelector("#accordionBody");
        
		for (let i = 0; i < result.length; i++) {
            $resultBody.appendChild(this.itemClass.createItemHtml(result[i].siteId,result[i].appstoreName))
		}
    }
}