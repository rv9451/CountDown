const enddate= 'Mon Nov 26 2030 09:29:50'
document.getElementById('end-date').innerHTML=enddate;
const input = document.querySelectorAll('input');

function clock(){
    const end = new Date(enddate)
    const now =new Date()
    const diff = (end-now)/1000;
    // console.log(diff);
if(diff<0) return;
    // coverts into days
    input[0].value=(Math.floor(diff/3600/24));
    // coverts into hours
    input[1].value=(Math.floor(diff/3600)%24);
    // coverts into min
    input[2].value=(Math.floor(diff/60)%60);
    // coverts into min
    input[3].value=(Math.floor(diff)%60);
    // console.log(Math.floor(diff/24/60)%60);

}
clock()
setInterval(
    ()=>{
        clock()
    },
    1000
)