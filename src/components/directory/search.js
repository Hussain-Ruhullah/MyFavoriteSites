import htmlToELement from 'html-to-element';


export default class SearchBox{
    constructor(element){
        const searchElement = this.createSearchHtml();
        element.appendChild(searchElement);
        this.$timeout=0;
        this.onChange;
    }

    createSearchHtml() {
        const searchElement = htmlToELement(`
            <div class="mySearch " style="padding-left:3px; display: inline; flex-direction: row;">
                <div class="Suche Suche--accordion ">
                    <input class="input search scriptBox" id="getText" type="text" placeholder="Suche"/>
                    <label for="">
                        <i class="fa fa-search"></i>
                    </label>
                </div>
            </div>`);

        searchElement.querySelector('#getText').addEventListener('keyup',()=>{
            chayns.showWaitCursor();
            // deletes the timeout
            clearTimeout(this.$timeout);
                // keypressed			
			this.$timeout = setTimeout(()=>{
                // timeoutcall
                const $text= searchElement.querySelector(".search").value;
                if($text===""){
                    this.$text="chayns"
                }

                // function from listcontainer.js
                this.onChange($text);
				//callback($text);
			},500);
        });
        return searchElement
    }


}