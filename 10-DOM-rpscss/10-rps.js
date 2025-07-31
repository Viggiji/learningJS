let x=''
      let compchoice=''

      let track=JSON.parse(localStorage.getItem('trackscore'));
      if (!track){
        track={
          Win:0,
          Lose:0,
          Tie:0 
        };
      } 

      function livescore(){
        
        document.querySelector('.js-score')
        .innerHTML = `Win: ${track.Win}, Tie: ${track.Tie}, Lose: ${track.Lose}`;
      }
      
      let whathappened= '';
      
      function rno(mych){
        x= Math.random()
        if (x>=0 && x<1/3){
          compchoice='Rock';
        }
        else if(x>=1/3 && x<2/3){
          compchoice='Paper';
        }
        else{
          compchoice='Scissors';
        }
        if (mych=='Rock' && compchoice=='Paper'){
          track.Lose=track.Lose +1 ;
          whathappened = "You Lost";
        }
        else if(mych=="Rock" && compchoice=="Rock"){
          track.Tie=track.Tie +1 ;
          whathappened = "You Tied";
        }
        else if(mych=="Rock" && compchoice=="Scissors"){
          track.Win=track.Win +1 ;
          whathappened = "You Won";  
        }
        else if (mych=='Paper' && compchoice=="Paper"){
          track.Tie=track.Tie +1 ;
          whathappened = "You Tied";
        }
        else if(mych=="Paper" && compchoice=="Rock"){
          track.Win=track.Win +1 ;
          whathappened = "You Won";
        }
        else if(mych=="Paper" && compchoice=="Scissors"){
          track.Lose=track.Lose +1 ;
          whathappened = "You Lost";
        }
        else if (mych=="Scissors" && compchoice=="Rock"){
          track.Lose=track.Lose +1 ;
          whathappened = "You Lost";
        }
        else if(mych=="Scissors" && compchoice=="Paper"){
          track.Win=track.Win +1 ;
          whathappened = "You Won";
        }
        else if(mych=="Scissors" && compchoice=="Scissors"){
          track.Tie=track.Tie +1 ;
          whathappened = "You Tied";
        }

        localStorage.setItem("trackscore",JSON.stringify(track));

        document.querySelector('.js-winorlose')
          .innerHTML = whathappened;

        document.querySelector('.js-whichhand')
          .innerHTML =
              `You picked <img class="move-img" src="emojis/${mych}-emoji.png" >.
            Computer picked <img class="move-img" src="emojis/${compchoice}-emoji.png" >.`;

//  This is the very nice use of template string where our choice names are same as the
//  image so we can use that directly in the src tag and it appears here as well.

        livescore();

      }