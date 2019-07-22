function jumpToBottom(){
    
        $(".active-chat").scrollTop(
            document.getElementsByClassName("active-chat")[0].scrollHeight
        );
}


function send_message() {
    if($("#message").val()){
        $('#loading_bar').show();
        $.ajax({
            url: '/send-user-chat/'+window.this_user_id,
            type: 'POST',
            data:{
                message:$("#message").val(),
            }
        }).then(function (data) {
            if(data == 'error'){

                alert('Уучлаарай алдаа гарлаа дахин оролдоно уу');
                $('#loading_bar').hide();
            } else {


                var who_class = 'me';

                var chatElement  = "<div class=\"bubble "+who_class+"\" id=\"chat__"+data+"\">"+ $("#message").val() +"<div class=\"chat_date\"></div></div>";
                $('#chat').append(chatElement);

                $('#loading_bar').hide();

                $("#message").val('');
                jumpToBottom( );
            }
        }).fail(function (data) {

                alert('Уучлаарай алдаа гарлаа дахин оролдоно уу');
            $('#loading_bar').hide();

        });
    } else {
        alert('Захиа хоосон байна!!!')
    }

}
/*sending*/
$( document ).ready(function(){
    jumpToBottom( '.active-chat' );
    


    $("#message").keypress(function(e) {
        if(e.which == 13) {
            send_message();
        }
    });

    $("#send_button").click(function(e) {

        send_message();

    });

    setInterval(function(){
        var person_id__ = window.this_user_id;
        $.ajax({
            url:'/chatNew/'+person_id__,
            type: 'GET'
        }).then(function(data){

            var chats = data;



            if(chats.length >=1){


                for(var z = 0; z < chats.length; z++){
                    var who_class = 'you';
                    if(window.this_user_id == chats[z].sender_id){
                        who_class = 'me';
                    }

                    if($("#chat__"+chats[z].id).length > 0){

                    }else {
                        var chatElement  = "<div class=\"bubble "+who_class+"\" id=\"chat__"+chats[z].id+"\" >"+ chats[z].chat+"<div class=\"chat_date\">"+chats[z].created_at.slice(0, -3)+"</div></div>";
                        $('#chat').append(chatElement);
                    }


                }
            }

            jumpToBottom( );

        });
    }, 5000);

    
});