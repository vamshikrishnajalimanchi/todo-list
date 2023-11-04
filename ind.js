//let v='vam'
//localStorage.setItem('v','v')
//var a=localStorage.getItem('name');
//console.log(v)
//console.log('hi')
let arr=[];
let del_ele;
function sub_val(){
    let inp_val=document.getElementById('inp').value;

    if (inp_val!=''&&inp_val!='id')
        {
        let arr_push_bool=true;
        arr.forEach(ele=>
            {
            if(inp_val==ele){
                alert("Given input 'To do' is already present in the list, hence try changing the input.");
                arr_push_bool=false;
            }
            })
            if(arr_push_bool){
            arr.push(inp_val);
            document.getElementById('inp').value='';
            to_display(arr)
            }
        console.log(inp_val);
        console.log(arr);
    }
    else{alert("given input invalid :( Please read & understand 'Note' section of the webpage");
    }
}
    function to_display(arr)
    {   let c='';
        if(arr==='undefined')
        {
            document.querySelector('.c1').innerHTML='there is no to do list :(';
        }
        else
        {
        arr.forEach((el)=>
        {c+=`<tr>${el}<button onclick='editor(event)' class='${el}'>edit</button><button onclick='deleter(event)' class='${el}'>delete</button></tr><br/>`;})
        document.querySelector('.c1').innerHTML=c;
        }
    }
    to_display(arr)

    function editor(event)
    {event.stopPropagation();
        console.log(event.target.className);
        document.getElementById('inp').value=event.target.className;
        del_ele=event.target.className;
        dele(del_ele)
    }

    function deleter(event)
    {event.stopPropagation();
        if (confirm('Do you want to delete ')==true){
            del_ele=event.target.className;
            
            dele(del_ele)
        }
        to_display(arr)
    }

    function dele(a){
        arr=arr.filter((e)=>e!=a)
       // console.log('this is being deleted '+arr);
    }