import htmlToElement from 'html-to-element'

 export default class listItem{

     createItemHtml(siteId,siteName){
         const itemHtml=htmlToElement(`
         <div class="listItems">
            <div class="ListItem ListItem--clickable">
                <div class="ListItem__head">
                    <div class="ListItem__Image">
                        <img style="width:40px;" display="inline" src="https://chayns.tobit.com/storage/${siteId}/Images/icon-57.png">
                    </div>
                    <div class="ListItem__Title">
                        <p class="ListItem__Title--headline" display="inline">${siteName}</p>
                    </div>
                 </div>
            </div>
        </div>
         `)

        itemHtml.querySelector('.ListItem--clickable').addEventListener('click', ()=>{
            chayns.openUrl({
                url: `https://chayns.net/${siteId}?tappId=1`
              });
        })

        return itemHtml;
     }
 }