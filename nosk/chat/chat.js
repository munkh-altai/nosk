function jumpToBottom(){
    
        $(".active-chat").scrollTop(
            document.getElementsByClassName("active-chat")[0].scrollHeight
        );
}
var scrollEvents = [];

function scrollDo(e) {
    if($(e.target).scrollTop() == 0) {

        var this_person = e.target.id.replace('chat_person', '');

        this_person = this_person*1;
        var this_chat = {};
        for(var z = 0; z < scrollEvents.length; z++){
            if(scrollEvents[z].person_id == this_person){



                if(scrollEvents[z].page < scrollEvents[z].last_page){
                    scrollEvents[z] = {person_id: this_person, page: scrollEvents[z].page+1, last_page:scrollEvents[z].last_page};

                    this_chat= scrollEvents[z];
                }


                if(this_chat.page <= this_chat.last_page){
                    $('#loading_bar').show();

                    $.ajax({
                        url:'/chat/'+this_person+'/'+this_chat.page,
                        type: 'GET'
                    }).then(function(data){


                        $('#loading_bar').hide();
                        var chats = data.data;



                        var lastScrollHeight = $(".active-chat").prop('scrollHeight');

                        if(chats.length >=1){
                            for(var z = 0; z < chats.length; z++){

                                var who_class = 'you';
                                if(window.this_user_id == chats[z].sender_id){
                                    who_class = 'me';
                                }

                                var chatElement  = "<div class=\"bubble "+who_class+"\" id=\"chat__"+chats[z].id+"\">"+ chats[z].chat+"<div class=\"chat_date\">"+chats[z].created_at.slice(0, -3)+"</div></div>";
                                $('#chat'+this_person).prepend(chatElement);
                            }

                        var newScrollheigth = $(".active-chat").prop('scrollHeight');


                            $(".active-chat").scrollTop(newScrollheigth - lastScrollHeight);
                        }







                    });
                }



            }
        }

    }
}

$('.left .person').mousedown(function(){
    if ($(this).hasClass('.active')) {
        jumpToBottom( );
        return false;
    } else {
        var person_id = $(this).data('chat').replace('person', '');
        window.last_user_id = person_id;


       

     $('#loading_bar').show();

        var findChat = $(this).attr('data-chat');
        var personName = $(this).find('.name').text();
        $('.right .top .name').html(personName);
        $('.chat').removeClass('active-chat');
        $('.left .person').removeClass('active');
        $(this).addClass('active');
        $('#chat'+person_id).empty();
        $('#chat'+person_id).append('<div class="conversation-start"></div>');

        for(var z = 0; z < scrollEvents.length; z++){
            if(scrollEvents[z].person_id == person_id) {
                scrollEvents[z] = {person_id: person_id, page: 1, last_page:scrollEvents[z].last_page};
            }
        }
                $.ajax({
            url:'/chat/'+person_id+'/'+1,
            type: 'GET'
        }).then(function(data){

            var chats = data.data;

            if(chats.length >=1){
                for(var z = chats.length-1; z >= 0; z--){
                    var who_class = 'you';
                    if(window.this_user_id == chats[z].sender_id){
                        who_class = 'me';
                    }

                    var chatElement  = "<div class=\"bubble "+who_class+"\" id=\"chat__"+chats[z].id+"\">"+ chats[z].chat+"<div class=\"chat_date\">"+chats[z].created_at.slice(0, -3)+"</div></div>";
                    $('#chat'+person_id).append(chatElement);
                }
            }
            $("#not_seen"+window.last_user_id).text('');
            $("#not_seen"+window.last_user_id).hide();


            $('.chat[data-chat = '+findChat+']').addClass('active-chat');
            $('#loading_bar').hide();
            jumpToBottom( );


            /*scroll*/

            var found = false;

            for(var z = 0; z < scrollEvents.length; z++){
                if(scrollEvents[z].person_id == person_id){
                    found = true;



                }
            }
            if(!found){

                scrollEvents.push({person_id: person_id, page: 1, last_page:data.last_page});

                $("#chat_person"+person_id).scroll(scrollDo);
            }






        });

      

    }
});

/*list starting*/
var options = {
    valueNames: [ 'name', 'preview' ]
};

var userList = new List('users', options);

function send_message() {
    if($("#message").val()){
        $('#loading_bar').show();
        $.ajax({
            url: '/nosk-chat/save-chat',
            type: 'POST',
            data:{
                message:$("#message").val(),
                receiver:window.last_user_id
            }
        }).then(function (data) {

            var who_class = 'me';
            
            if(data =='error'){
                alert('Уучлаарай алдаа гарлаа дахин оролдоно уу')
                $('#loading_bar').hide();
            } else {
                var chatElement  = "<div class=\"bubble "+who_class+"\" id=\"chat__"+data+"\">"+ $("#message").val() +"<div class=\"chat_date\"></div></div>";
                $('#chat'+window.last_user_id).append(chatElement);

                $('#loading_bar').hide();




                $('#user_list').prepend($('#user_list #userchat'+window.last_user_id));

                $('#user_list #userchat'+window.last_user_id+' #preview'+window.last_user_id).text($("#message").val());
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

    scrollEvents.push()

    scrollEvents.push({person_id: window.last_user_id, page: 1, last_page:window.last_chat_room.last_page});

    $("#chat_person"+window.last_user_id).scroll(scrollDo);


    /*last chat*/

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
var person_id__ = window.last_user_id;
        $.ajax({
            url:'/chatNew/'+person_id__+"/true",
            type: 'GET'
        }).then(function(data){

            var chats = data;



            if(chats.length >=1){


                for(var z = chats.length -1 ; z >= 0; z--){
                    var who_class = 'you';
                    if(window.this_user_id == chats[z].sender_id){
                        who_class = 'me';
                    }

                    if($("#chat__"+chats[z].id).length > 0){

                    }else {
                        var chatElement  = "<div class=\"bubble "+who_class+"\" id=\"chat__"+chats[z].id+"\" >"+ chats[z].chat+"<div class=\"chat_date\">"+chats[z].created_at.slice(0, -3)+"</div></div>";
                        $('#chat'+person_id__).append(chatElement);
                        jumpToBottom( );
                    }


                }
            }










        });
    }, 5000);


    setInterval(function(){

        $.ajax({
            url:'/chatOther/'+window.last_user_id,
            type: 'GET'
        }).then(function(data){


            if(data.length >= 1){
                for(var n = 0; n < data.length; n++){
                    $('#user_list').prepend($('#user_list #userchat'+data[n].sender_id));
                    $('#user_list #userchat'+data[n].sender_id+' #preview'+data[n].sender_id).text(data[n].chat);
                    $("#not_seen"+data[n].sender_id).text(data[n].total_un_seen);
                    $("#not_seen"+data[n].sender_id).show();
                }

            }



        });
    }, 7000);

   
});