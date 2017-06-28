/*
ContentToc -- For pages Mao to scroll.
Required Jquery
date: 2017-06-27
e-mail:mwl_0319@hotmail.com
*/
require("jquery");
require("../css/toc.css");
export default class contentToc {
  /*
    Initialize toc node list and get their child list
  */
  constructor({container=null, nodeList=[], tocClass='toc', childClass='toc-child'}={}){
    if(container){  
      this.nodeList = getTocNodes(container, tocClass, childClass)
      this.container = container instanceof $? container:$(container);
    }else{
      this.nodeList = nodeList;
      this.container = $('body')
    }

    if(this.nodeList.length > 0){
      this.init();
    }
  }
  
  init(){
    let _this = this;
    let count_toc = 1;
    let count_child = 1;
    // Create Toc list.
    let tocUl = _this.createTocList(_this.container, {className:"toc_container"});
    //
    _this.nodeList.forEach(function(item){
      let toc_name = 'TOC_' + count_toc++;
      _this.setMao(item.node, toc_name)
      // item.node.setAttribute('name', toc_name)
      //Create Toc node.
      let toc = _this.createTocNode(tocUl, item.title, `#${toc_name}`);
      //Get offsetHeight.
      if(item.childList.length > 0){
        //Create child ul
        let childContainer = _this.createTocList(toc)
        //Set child.
        for(let i=0;i<item.childList.length;i++){
          let child = item.childList[i].child;
          let title = item.childList[i].title;
          let toc_child_name = 'TOC_child_' + count_child++;
          // child.setAttribute('name', toc_child_name)
          _this.setMao(child, toc_child_name)
          _this.createTocNode(childContainer, title, `#${toc_child_name}`)
        }
      }
    //   
    })
  } 

  /*
    Create toc list
  */
  createTocList(parentNode, {className=""}={}){
    let new_obj = $(`<ul class="${className}"></ul>`)
    parentNode = parentNode instanceof $? parentNode:$(parentNode);
    parentNode.append(new_obj)
    return new_obj
  }
  /*
    
  */
  createTocNode(parentNode, tocName, link){
    let new_obj = $(`<li><a href="${link}">${tocName}</a></li>`);
    parentNode = parentNode instanceof $? parentNode:$(parentNode);
    parentNode.append(new_obj);
    return new_obj
  }
  /**/
  setMao(node, name){
    //if target.nodeName is <a>
    if(node.nodeName.toString().toUpperCase() == 'A'){
      node.setAttribute('name', name)
    }else{
      let htmlStr = node.innerHTML;
      $(node).html("")
      $(node).append(`<a name="${name}">${htmlStr}</a>`)
    }
  }
}

/*
  Get container's Toc nodes for those whose class includes tocClass,
  and childClass as their childNodes.
*/
function getTocNodes(container, tocClass, childClass){
  let list=[]
  let children;
  let _root = container instanceof $? container:$(container);
  children = _root.children(`.${tocClass}`).toArray();
  let len = children.length;
  for(let i=0; i<len; i++){
    let current = children[i];
    if( (i+1) < len){
      let next = children[i+1];
      list.push({node: current, title: current.innerHTML, childList: getChildren(current, childClass, {next:next})})
    }else{
      list.push({node: current, title: current.innerHTML, childList: getChildren(current, childClass)})
    }
  }
  return list
}
/*
  Get 'current' node's child list.
  If has 'next' node, get 'current' next all siblings and 'next' prev all siblings mixins.
*/
function getChildren(current, childClass, {next=null}={}){
  let result = [];
  let currentChildren = $(current).nextAll(`.${childClass}`).toArray()
  if(next){
    let _prevList = $(next).prevAll(`.${childClass}`).toArray()
    currentChildren.forEach(o=> _prevList.includes(o)? result.push({child:o, title:o.innerHTML}) : null)
  }else{
    currentChildren.forEach(o=> result.push({child:o, title:o.innerHTML}))
  }
  return result
}