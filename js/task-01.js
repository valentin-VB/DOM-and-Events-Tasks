const categoriesRef = document.querySelector('#categories');

console.dir("categoriesRef", categoriesRef);
console.log("Number of categories:", categoriesRef.children.length);


for (const item of categoriesRef.children) {
   const headerTextContent = item.firstElementChild.textContent;
   console.log('Category:', headerTextContent);

   const childrenOfSubCategory = item.lastElementChild.children;
   console.log('Elements:', childrenOfSubCategory.length)
}


