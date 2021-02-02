var h = 0,m = 0,s = 0; //initializing h,m,s as zero
      var tim;
      //initially pause and stop buttons are disabled
      document.getElementById("pause").disabled = true; 
      document.getElementById("stop").disabled = true;

      //selecting div block to change text
      var H = document.querySelector("#H");
      var M = document.querySelector("#M");
      var S = document.querySelector("#S");

      //startwatch function to start timer and enabling buttons
      function startWatch(){
          tim = setInterval(start,1000);
          document.getElementById("pause").disabled = false;
          document.getElementById("stop").disabled = false;
          document.getElementById("start").disabled = true;
      }
      function start(){
          s++;
          if(s==60){
              m++;
              s=0;
          }
          if(m==60){
              h++;
              m=0;
          }
          if(h<=9){
            H.innerHTML = "0"+h;
          }
          else{
            H.innerHTML = h;
          }

          if(m<=9){
            M.innerHTML = "0"+m;
          }
          else{
            M.innerHTML = m;
          }

          if(s<=9){
            S.innerHTML = "0"+s;
          }
          else{
            S.innerHTML = s;
          }
      }

      //storing text of pause button to change it
      var changePauseText = document.querySelector("#pause");
      function pause(){
        clearInterval(window.tim);
        if (changePauseText.innerHTML === "pause") {
            changePauseText.innerHTML = "continue";
        } else {
            changePauseText.innerHTML = "pause";
            startWatch();
        }
      }

      //function to stop and modify div data
      function stop(){
        h = 0,m = 0,s = 0;
        H.innerHTML = "0" + h;
        M.innerHTML = "0" + m;
        S.innerHTML = "0" + s;
        clearInterval(window.tim);
        changePauseText.innerHTML = "pause";
        document.getElementById("start").disabled = false;
        document.getElementById("pause").disabled = true;
        document.getElementById("stop").disabled = true;
        
      }