// alert ("hellow world")
// console.log("hellow worlld")
// document.write("hellow world")


// var a;
// a ="hellow world"
// alert(a)
// a ="577777"
// alert(a)

// var a = 2 ;
// var b = 7;
// var c = a + b ;
// alert(c)

//  -------------------------------------------------- input

// var age = prompt ( 'enter age' ,"18+"  )
// alert("submit successfully")

// ---------------------------------------- to plus input value

// var age = +prompt( "enter age","18+");
// var num  = 2;
// alert( age + num)

// var user = prompt ( "enter your name"  )
// var user = prompt ( "pass")
//  alert ( " sucessfull")
 
// -------------------------------------------------if condition was true
// ------------------------------------------else condition was false
// ------------------greaterthen > : lessthen <  : greaterthen equals >= : lessthen equals <= : not  equals !== : doubleequals == : tripalequal ===

// var age = +prompt( "enter y0ur age" , 10)
// if(age > 10){
//     console.log( "allowed")
// }else{
//     alert( "not allowed")
// }

// var age = +prompt( "enter y0ur age" , 10)
// if(age >= 10){
//     console.log( "allowed")
// }else{
//     alert( "not allowed")
// }

// var age = +prompt( "enter y0ur age" , 10)
// if(age < 10){
//     console.log( "allowed")
// }else{
//     alert( "not allowed")
// }



// var age = +prompt( "enter y0ur age" , 10)
// if(age <= 10){
//     console.log( "allowed")
// }else{
//     alert( "not allowed")
// }

// var age = +prompt( "enter age")
// if (age == 10){
//     console.log( "allowed")
// }else {
//     alert("not allowed")
// }

// var day = prompt( "enter a day")
// if(day =="monday"){
//     alert( "today is monday")
// }
//  if(day =="tuesday"){
//     alert( "today is tuesday")
//  }

// if( day =="wednesday"){
//     alert( " today is wednesday")
// }

// var age = +prompt("enter age")
// if(age != 10){
//     alert("not allowed")
// }

//  --------------------------------------------------------- AND OPERATOR : OR APERATOR

// var perc = +prompt( "enter your percentage" , "enter your percentage")
// if ( perc  <= 100 && perc  >=80  ){
// document.write("your grade is A+")
// }
// else if ( perc  <= 80 && perc  >=70  ){
//     document.write("your grade is A")
// }

// else if ( perc  <= 70 && perc  >=60  ){
//     document.write("your grade is B")
// }

// else if ( perc  <= 60 && perc  >=50  ){
//     document.write("your grade is C")
// }

// else if ( perc  <= 50 && perc  >=0  ){
//         document.write("your grade is fail")
// }
// else{
//         document.write("invalid percentage")
// }


// var age = 10;
// var gender ="female";
// var phn ="xyz";
// if( age >7 || gender =="male" || phn == "abc"){ 
// alert(" you are allowed")
// }
// else{
//     alert("your are not allowed")
// }

// --------------------------------------------------- ARRAY
// var arr=[ 90 ,"ali" ,true, "haha12", 7]
// document.write( arr )

// var arr=[ 90 ,"ali" ,true, "haha12", 7]
// document.write( arr[2] )

// --------------------------------------------------------- for loop

// var arr=[ "hjj" ,"hhjh","gyu","fjklh","ytsk","afdghjk"]

// for ( i=0; i< arr.length; i++ ){
//     console.log(arr[i])
// }


// var city = prompt( "entercity");
// var cities=[ "karachi","lahore","hyd","multan","sialkot"];
// var flagvalue = false;
// for( i=0;i<cities.length;i++ ){
//     if(cities[i]==city){
//         flagvalue = true;
//         alert("founded")
//     }
// }
//  if(!flagvalue){
//     alert("not founded")
//  }


//  -------------------------------------------------------------- nested for loop
// var firstname =["jdnvnv","afedf","dveefe","eefef"]
// var lastname =["feff","efef","vea","ujjyg","uyrgfdsa","tfv"]
// for( var i =0;i<firstname.length;i++){
   
//     for( var j=0;j<lastname.length;j++){
//         console.log( firstname[i],lastname[j]);
//     }
// }

// -------------------------------------------------------to capital first word
// var myname = "rehman"

// var names = myname.slice(0, 1).toUpperCase() + myname.slice(1)

// console.log(names)

// ------------------------------------ chapter 23 --------------------------------

// var text= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unc"
// for( var i=0; i< text.length;i++){

//     if ( text.slice (i, i+10) == "dummy text"){
//         text=text.slice(0,i) +"MY TEXT" + text.slice(i+10)
//     }
// }
// console.log(text)

//-------------------------------------------------------first index

// var text= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesettin"
// var dummytextindex = text.indexOf("unknown printer ")
// if(dummytextindex!= -1){
//     text = text.slice(0,dummytextindex) +"my text" + text.slice(dummytextindex +15)
// }
// console.log(text)


//-----------------------------------------------------last index

// var text= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic unknown printer typesettin"
// var dummytextindex = text.lastIndexOf("unknown printer ")
// if(dummytextindex!= -1){
//     text = text.slice(0,dummytextindex) +"my text" + text.slice(dummytextindex +15)
// }
// console.log(text)

//-----------------------------------------------------------------charAt
// var text="lorem gfhhh !  lorfmm ! hgjkkl"
// for( var i=0;i<text.length;i++){
//     if(text.charAt(i) =="!"){
//         alert("exists")
//         break
//     }
// }


//-------------------------------------------------------------------------replace -------imp
// var text="lorem gfhhh !  lorem ! hgjkkl dfdffdf dvdfddff wao sfffsf "
// text=text.replace("lorem","nothing")
// console.log(text)

// var text="lorem gfhhh !  lorem ! hgjkkl dfdffdf dvdfddff wao sfffsf "
// text=text.replace(/lorem/g,"nothing")
// console.log(text)


//-------------------------------------------math methods

// -------------------------------------------------------round  (o - 0.4  round to smallest number)-( 0.5 - 0.9 round tolargest number)
// var num= 0.6
// newnum=Math.round(num)
// console.log(newnum)

// ------------------------------------------------------------floor ( round to smallest number)
// var num= 2.6
// newnum=Math.floor(num)
// console.log(newnum)

// ---------------------------------------------------------ceil ( round to largest number)
// var num= 1.2
// newnum=Math.ceil(num)
// console.log(newnum)

// -----------------------------------------------------------randomnumber ( 16 decimal places)
// var num = Math.random()          // ludo dice type
// console.log(Math.ceil (num*6))


// --------------------------------------------------strings to number
//          ----------------------------------------- Number -- parseInt -- parsefloat


// var num="4"
// num =Number(num)
// var num_1= 2
// console.log( num + num_1)

// var num="4.3"
// num =parseInt(num)
// var num_1= 2
// console.log( num + num_1)

// var num="4.2"
// num =parseFloat(num)
// var num_1= 2.2
// console.log( num + num_1)

// ---------------------------------------------------number to string 
// .tostring()

// var a= 1
// a=a.toString()
// console.log(typeof a)

// ----------------------------------------------date & time ----------------------------------------------
// current date time day year sec millisec 

// var now = new Date()
// console.log(now)

// var day=now.getDay()
// var dayArr=["sunday","monday", "tuesday","wednesday","thursday","friday","sarurday" ]
// var nowday=dayArr[day]
// console.log(nowday)


// var month=now.getDay()
// var monthArr=["jan","feb", "mar","apr","may","jun","jul" ]
// var nowmonth=monthArr[month]
// console.log(nowmonth)

// var fullyear=now.getFullYear()
// console.log(fullyear)

// var hrs=now.getHours()
// console.log(hrs)

// var min=now.getMinutes()
// console.log(min)

// var sec=now.getSeconds()
// console.log(sec)

// var milisec=now.getMilliseconds()
// console.log(milisec)

// var date=now.getDate()
// console.log(date)

// var time=now.getTime()  // ------------------- only show milliseconds from 1 jan 1970 -----------------
// console.log(time)

//--------------to set date & time-----------------

// var currentdate= new Date("oct 17,2002")
// console.log(currentdate)

// var currentdate= new Date()
// currentdate.setDate(28)
// currentdate.setFullYear(2016)
// currentdate.setHours(5)
// currentdate.setMilliseconds(999)
// currentdate.setMinutes(52)
// currentdate.setMonth(6)
// currentdate.setSeconds(12)
// console.log(currentdate)

// -------------------------------age calculator ------------------

// var currentdate=new Date()
// var currenttime=currentdate.getTime()
// var bday= prompt("enter birth date","jan 1,2000") 
// var birthdate= new Date(bday) 
// var bdaytime= birthdate.getTime()
// var diff= (currenttime - bdaytime)
// // console.log(diff)
// var bdayyear= (diff /(1000*60*60*24*365))
// alert(Math.floor(bdayyear))

// -------------------function----------------

// function has(){
    // var currentdate=new Date()
    // var currenttime=currentdate.getTime()
    // var bday= prompt("enter birth date","jan 1,2000") 
    // var birthdate= new Date(bday) 
    // var bdaytime= birthdate.getTime()
    // var diff= (currenttime - bdaytime)
    // // console.log(diff)
    // var bdayyear= (diff /(1000*60*60*24*365))
    // alert(Math.floor(bdayyear))

//     var currentdate = new Date()
//     var hrs=currentdate.getHours()
//     var min=currentdate.getMinutes()
//     var sec=currentdate.getSeconds()
//     console.log( "current time is",  hrs +":" ,+ min + ":" ,+ sec) 
 
// }
//     has()

function alert1(name) {
    alert( "welcome" +" "+ name);
}

alert1("hasuu")
alert1("ahmed")