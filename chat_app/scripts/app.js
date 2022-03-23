//dom queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
// const updateMssg = document.querySelector('.update-msg');
const rooms = document.querySelector('.chat-rooms');

//add a new chat
newChatForm.addEventListener('submit', e =>{
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));
});

//upd name 
newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    //upd name in chat class
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    //reset the form
    newNameForm.reset();
    //show then hide upd msg
    //updateMssg.innerHTML = `Your name was updated to <span class="username">${newName}</span>`;
    newNameForm.name.setAttribute('placeholder', `current name is: ${newName}`);
    //setTimeout(() => {updateMssg.innerHTML = ''}, 3000);
});

//upd the chatroom
rooms.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }
});

//check local storage for a name
const username = localStorage.username ? localStorage.username : 'anonymous';

newNameForm.name.setAttribute('placeholder', `current name is: ${username}`);

//class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

//get chats and render
chatroom.getChats(data => chatUI.render(data));

