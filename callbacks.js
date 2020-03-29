
//callbacks
function connect(callback){
  console.log("connecting..");
  console.log("...");
  callback("finished connecting")
  }
  connect(console.log);

  //with your own function
  function connect(callback){
    console.log("connecting..");
    console.log("...");
    callback("finished connecting")
    }
    connect(function(value)){
      console.log(value);
    }
    //asynchronous codes actually do not execute immediately.
    //js has inbuilt timer to be set accordingly.
  function cookFood() {
    console.log("just started cooking... :)");
    setTimeout(function() {
      sconsole.log("time to eat");
    },2000);
  }
  function eat() {
    clearTimeout(readingId);
    setTimeout(function() {
      console.log("done eating...");
      read();
    },3000);
  }
  function read(){
    let timerId = setInterval(function(){   //setInterval will run code over and over again with given interval.
      console.log("reading...")
    },500);
    return timerId;
  }
  let readingId= read();
  cookFood();
