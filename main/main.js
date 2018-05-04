// Write your cade below:
function main(userInput,system) {
    //result[0]代表A的个数，result[1]代表B的个数
    var result=[];
    result[0]=0;
    result[1]=0;
    //console.log(userInput);


    //将用户输入的四位数转化
    let n1=parseInt(userInput/1000);
    let n2=parseInt(userInput/100%10);
    let n3=parseInt(userInput/10%10);
    let n4=parseInt(userInput%10);

    //将系统输入的四位数转化
    let arr1=parseInt(system/1000);
    let arr2=parseInt(system/100%10);
    let arr3=parseInt(system/10%10);
    let arr4=parseInt(system%10);
    let arr=[arr1,arr2,arr3,arr4];

    calculateAB(0,arr,n1,result);
    calculateAB(1,arr,n2,result);
    calculateAB(2,arr,n3,result);
    calculateAB(3,arr,n4,result);

    var outcome='';
    outcome+=result[0]+'A'+result[1]+'B';
    return outcome;
};

function calculateAB(num,arr,user,result)
{
    if(arr[num]==user)
    {
        result[0]++;
    }else if(arr.indexOf(user)!=-1)
    {
        result[1]++;
    }
    //console.log(num,result[0],result[1]);
}
module.exports =main;