import htmlToELement from 'html-to-element';
import './form.scss';

export default class Form{
        constructor(){
            this.$name;
            this.$postAdresse;
            this.$eMailAdresse;
            this.$msg;
            this.$status;
        }

        //Methods
        createFormHtml() {
            const registerElement = htmlToELement(`
            <div>
            <div class="accordion ">
                <div class="accordion__head">Melde deine Website
                    <div class="right" style="padding-left:13px; display: flex; flex-direction: row;">
                        <div class="badge accordion--trigger">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </div>
                    </div>

                    <div class="accordion--trigger accordion__head--search--wrapper">

                    </div>
                </div>
                
                <div class="accordion__body">
                    <div id="container" class="accordion__content" >
                        <!-- Form start -->
                        <div class="formContainer">

                                <div>
                                        <input id="name" class="input form" type="text" placeholder="Name" style="width:100%" required>
                                    </div>
                                    <div>
                                        <input id="postAdresse" class="input form" type="text" placeholder="postAdresse" style="width:100%" required>
                                    </div>
                                    <div>
                                        <input id="eMailAdresse" class="input form" type="text" placeholder="eMailAdresse" style="width:100%"
                                            required>
                                    </div>
                                    <div>
                                            <textarea class="input form" style="width:100%"  id="msg" autogrow placeholder="text"></textarea>
                                    </div>
                    
                                    <div style="text-align: center">
                                        <p id="status"></p>
                                        <button id="sendButton" class="button sButton ">
                                            Senden
                                        </button>
                                    </div>

                        </div>

                    </div>

                </div>
            </div>
            </div>
            `);

            registerElement.querySelector("#sendButton").addEventListener("click", ()=>{

                if(this.verifier(registerElement)){

                    this.sendToPage();
                }
                
            })
            return registerElement;
        }

        verifier(element){
            this.$name = element.querySelector("#name").value;
            this.$postAdresse = element.querySelector( "#postAdresse" ).value;
            this.$eMailAdresse = element.querySelector( "#eMailAdresse" ).value;
            this.$msg = element.querySelector( "#msg" ).value;
            this.$status=element.querySelector('#status');
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (this.$name==""||this.$postAdresse==""||this.$eMailAdresse==""||re.test(this.$eMailAdresse.toLowerCase())||this.$msg=="") {
                chayns.dialog.alert("please complete the registration form")
                    .then(function (data) { 
                        console.log(data) 
                    });
                    return false;                                   
            }
              console.log("verified")
              return true;
            
        }

        sendToPage(){
            console.log("User: " + this.$name + " \n postAdresse: " + this.$postAdresse + " \n eMailAdresse : " + this.$eMailAdresse + "\n said: " + this.$msg)
            chayns.intercom.sendMessageToPage({
                text: "User: " + this.$name + " \n postAdresse: " + this.$postAdresse + " \n eMailAdresse : " + this.$eMailAdresse + "\n said: " + this.$msg
            }).then(data=> {
                if (data.status == 200) {
                    console.log('Success');
                }
            });
        }

};
