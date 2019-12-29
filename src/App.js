import React from 'react';


class App extends React.Component{
  render(){
    return(
      <div className = "app">
        <ChatRoomList />
        <MessagesList />
        <SendMessageForm />
        <NewRoomForm />
      </div>
    );
  }
}

export default App
