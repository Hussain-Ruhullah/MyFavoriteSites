// import UserList from '../../components/userList/userList';

export default () => {
    // initlialise a Class UserList, which holds a List of Persons
    let form = class Form{
        constructor() {

        this.$name = document.querySelector( "#name" ).value;
        this.$postAdresse = document.querySelector( "#postAdresse" ).value;
        this.$eMailAdresse = document.querySelector( "#eMailAdresse" ).value;
        this.$msg = document.querySelector( "#msg" ).value;
        this.$status=document.querySelector('#status');

        }
        //Getter
        get values(){

        }
        //Methods

        verifier(){
            if ($name==""||$postAdresse==""||($eMailAdresse==""&&($eMailAdresse!="@"))||$msg==""){
                $status.innerHTML = "please complete the registration form";
            }else{
              comment();
            }
        }

        sendToPage(){
            chayns.intercom.sendMessageToPage({
                text: "User: " + $name + " \n postAdresse: " + postAdresse + " \n eMailAdresse : " + eMailAdresse + "\n said: " + msg
            }).then(data=> {
                if (data.status == 200) {
                    console.log('Success');
                }
            });
            }

      };
};
