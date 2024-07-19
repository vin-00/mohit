let sortingway=document.querySelector('#selectsorting');
let input=document.querySelector('#inp');
let btn=document.querySelector('#btn');
let n;
btn.addEventListener('click',async()=>{
    sortingway=sortingway.value
    let array=document.querySelector('.array');
    console.log(sortingway);
    array.innerHTML=``;
    n=parseInt(input.value);
// now working fine

    console.log(sortingway);
    for(let i=0;i<n;i++){
        let array=document.querySelector('.array');
        // console.log(array);
        array.innerHTML+=`<div class='value' id=idx-${i} >${parseInt((Math.random()*100)%n)}</div>`
    }
    if(sortingway=="bubble"){

        await bubbleSort();
    }
    if(sortingway=="selection"){
        console.log('enter');
        await selectionSort();
    }
    if(sortingway=="heap"){
        await heapSort();
    }
    if(sortingway=="quick"){
        await quickSort();
    }
    if(sortingway=="merge"){
        await mergeSort(0,n-1);
    }
    if(sortingway=="insertion"){
        await insertion();
    }
    
})
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
async function bubbleSort(){
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            await sleep(400)
            let val1=document.querySelector(`#idx-${j}`)
            let val2=document.querySelector(`#idx-${j+1}`)
            if(parseInt(val1.innerHTML)>parseInt(val2.innerHTML)){
                val1.classList.add('highlight');
                val2.classList.add('highlight');
                await sleep(1200)
                let temp=val1.innerHTML;
                val1.innerHTML=val2.innerHTML;
                val2.innerHTML=temp;
                val2.classList.remove('highlight');
                val1.classList.remove('highlight');
            }
        }
    }
    
    
}
async function selectionSort(){
    console.log('enter');
    // find minimum for elements n-1
    for(let i=0;i<n-1;i++){
        // await sleep(1400)
        
        
        await sleep(500);
        let val2=document.querySelector(`#idx-${i}`)
        let mini=parseInt(val2.innerHTML);
        let idx=val2;
        val2.classList.add('highlight');
        for(let j=i+1;j<n;j++){
            let val1=document.querySelector(`#idx-${j}`)
            if(parseInt(val1.innerHTML)<mini){
                idx=val1;
                mini=parseInt(val1.innerHTML);
            }
        
        }
        // await sleep(10400);
        idx.classList.add('highlight');
        await sleep(500);
        let temp=idx.innerHTML;
        idx.innerHTML=val2.innerHTML;
        val2.innerHTML=temp;
        await sleep(100);
        idx.classList.remove('highlight');
        val2.classList.remove('highlight');

    }


}

async function insertion(){

// move backward inserting elements in sorted order 
console.log('inside');
await sleep(1000);
let x = document.querySelector(`#idx-${0}`);
x.classList.add('sorted');
for(let i=1;i<n;i++){
    let j=i;
    while(j-1>=0){
        let val1=document.querySelector(`#idx-${j}`)
        let val2=document.querySelector(`#idx-${j-1}`)
        if(parseInt(val1.innerHTML)<parseInt(val2.innerHTML)){
            val1.classList.add('highlight');
            val2.classList.add('highlight');
            await sleep(500);
            let temp=val1.innerHTML;
            val1.innerHTML=val2.innerHTML;
            val2.innerHTML=temp;
            await sleep(1000);
            val1.classList.remove('highlight');
            val2.classList.remove('highlight');
        }
        else break;
        j--;
    }

    let val = document.querySelector(`#idx-${i}`);
    val.classList.add('sorted');

}



    
}




function heapSort(){


}




function quickSort(){


}


    async function merge(l,mid,h){
        let points=[];
        // an =  mid - l + 1
        for(let i=l;i<=mid;i++){
        let val1=document.querySelector(`#idx-${i}`)
             val1.classList.add('merge-left');
             await sleep(500);
            points.push(val1.innerHTML);
        }
        // bn = h - mid 
        // both are sorted just merge them
        for(let i=mid+1;i<=h;i++){
        let val1=document.querySelector(`#idx-${i}`)
             val1.classList.add('merge-right');
             await sleep(500);
            points.push(val1.innerHTML);
        }
        points.sort(function(a, b){return a-b});
        for(let i=l;i<=h;i++){
        document.querySelector(`#idx-${i}`).innerHTML=points[i-l];
        document.querySelector(`#idx-${i}`).classList.remove('merge-left')
        document.querySelector(`#idx-${i}`).classList.remove('merge-right')
        }
        await sleep(500);
    }

async function mergeSort(l, h){
    if(l>=h){
        // only one element in the array 
    await sleep(2000);
        let val=document.getElementById(`idx-${l}`);
            // val.style.backgroundColor="none";
            val.classList.add('colorIt');
        return ;
    }
    await sleep(2000);
    let color=`rgb(${(parseInt(Math.random()*1000))%(255)},${(parseInt(Math.random()*1000))%(255)},${(parseInt(Math.random()*1000))%(255)})`;
    let mid=parseInt((l+h)/2);
    for(let i=l;i<=h;i++){
        let val=document.getElementById(`idx-${i}`);
        val.style.backgroundColor=color;

    }
    await sleep(2000);
    await mergeSort(l,mid);
    await mergeSort(mid+1,h);

       await merge(l,mid,h)

}
function delay(){
    setTimeout(()=>{
        console.log('calling after delay');
    },10000);
}
async function getdelay(){
    await delay();
    btn.style.backgroundColor='black'
}