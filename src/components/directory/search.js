import htmlToELement from 'html-to-element';


export default class SearchBox{
    constructor(){
        this.$timeout=0;
    }

    

    createSearchHtml(callback) {
        const searchElement = htmlToELement(`
            <div class="mySearch " style="padding-left:3px; display: inline; flex-direction: row;">
                <div class="Suche Suche--accordion ">
                    <input class="input search scriptBox" id="getText" type="text" placeholder="Suche"/>
                    <label for="">
                        <i class="fa fa-search"></i>
                    </label>
                </div>
            </div>
        `);

        searchElement.querySelector('#getText').addEventListener('keypress',()=>{
            chayns.showWaitCursor();
            clearTimeout(this.$timeout);
            // keypressed			
			this.$timeout = setTimeout(()=>{
                // timeoutcall
				const $text= searchElement.querySelector(".search").value;
				callback($text);
			},500);
        });
        return searchElement
    }


}