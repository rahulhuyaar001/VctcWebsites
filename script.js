{
  /* <div id="parent">
<ul id="child">
    <li class="items">First</li>
    <li class="items">Second</li>
    <li class="items">Third</li>
    <li class="items">Forth</li>
    <li class="items">Fifth</li>
</ul>
</div> */
}

/*   get element by id  */
// let pera = document.getElementsById("pera");
// console.log(pera);

/*   get element by class name   */
// let pera = document.getElementsByClassName("pera");
// for(i= 0 ; i<pera.length ; i++){
//     pera[i].innerHTML = "changed";
// }

/*   get element by tag name  */
// let pera = document.getElementsByTagName("pera");
// console.log(pera);

/*   tarrget child element of any parent element in document   */
// let parent = document.getElementById("division");
// let child = parent.getElementsByTagName("p");
// console.log(child[0]);

/*   querySelector select by all types of selectors (only first class OR tag in doc.)   */
// let select = document.querySelector(".items");
// console.log(select);

/*   querySelectorAll select by all types of selectors (select all classes OR tags in doc)   */
// let selectAll = document.querySelectorAll(".items");
// console.log(selectAll);

/*   select parent element by using child element   */
//  let child = document.getElementById("child");
//  let parent = child.parentElement;
//  console.log(parent);

/*   select first child element by using child parent   */
//  let parent = document.getElementById("parent");
//  let child = parent.firstElementChild;
//  console.log(child);

/*   select last child element by using child parent   */
//  let parent = document.getElementById("parent");
//  let child = parent.lastElementChild;
//  console.log(child);

/*   select all child element by using parent Element   */
//  let parent = document.getElementById("child");
//  let child = parent.children;
//  console.log(child);

/* next sibling child*/
// let child = document.getElementById("child");
// let fchild = child.firstElementChild;
// let nextchild = fchild.nextElementSibling;
// console.log(nextchild);

/* previous sibling child */
// let child = document.getElementById("child");
// let fchild = child.lastElementChild;
// let nextchild = fchild.priviousElementSibling;
// console.log(nextchild);

/* create and append element */
//  let parent = document.getElementById("child");
//  let create = document.createElement("div");
//  let addEle = parent.append(create);
//  let text = create.textContent = "This is Append Div";
//  console.log(create);

/*     add classes or id by javascript    */
// let className = document.getElementById("child");
// let fchild = className.firstElementChild;
// fchild.className = "first_li";
// fchild.id = "first_li";
// console.log(fchild);

/*    insert html tag befor selected Element      */
//  let child = document.getElementById("child");
//  let schild = child.firstElementChild.nextElementSibling;
//  console.log(schild);
// create element
//  let newLable = document.createElement("lable");
//  newLable.textContent = "Insert New "
//  child.insertBefore(newLable, schild);

/*     removeChild() function (delete child element)     */
// let parent = document.getElementById("child");
// let child = parent.firstElementChild.nextElementSibling.nextElementSibling;
// console.log(child);
// parent.removeChild(child);

/*     remove() function(delete parent Element)    */
//  let parent = document.getElementById("child");
//  let child  = parent.firstElementChild;
//  let delUl = child.parentElement;
//  console.log(delUl)
//  delUl.remove();

/*   CloneNode() Function if CloneNode(True)-includes the childs of selected element 
//                        if CloneNode(false)- childs has been Removed  */
// let parent = document.getElementById("parent");
// let child = document.getElementById("child");
// let clonedChild = child.cloneNode(true);
// child.append(clonedChild);
// console.log(clonedChild);

/*  replace element  */
//  let prnt = document.getElementById('child');
//  let fchild = prnt.firstElementChild;
//  console.log(fchild)
//  let newele = document.createElement("li");
// console.log(newele);
//  newele.textContent = "Top List Item";
//  let repl = prnt.replaceChild(newele, fchild);

/* insertAdjacentHTML('position',"String")*/
/*inset a stringNode around the selected html Element
        positons:: before begin
                   after begin
                   before end
                   after end*/
// let chld = document.getElementById("child");
// let fchld = chld.firstElementChild.nextElementSibling.nextElementSibling;
// fchld.insertAdjacentHTML("Beforebegin", " Beforebegin ");
// fchld.insertAdjacentHTML("Afterbegin", " Afterbegin ");
// fchld.insertAdjacentHTML("Beforeend", " Beforeend ");
// fchld.insertAdjacentHTML("Afterend", " Afterend ");
