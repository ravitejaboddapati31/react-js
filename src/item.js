import react from "react";
const itemlist=[
    {cat:"books",product:["javascript","php","reacyt.js","python","django","mysql"]},
    {cat:"mobile",product:["redmi","oneplus","vivo","oppo","samsung","iphone","nokia"]},
    {cat:"technologies",product:["javascript","php","reacyt.js","python","django","mysql"]},
    {cat:"food",product:["milk","biscuit","chacolate","silk","rice","chicken","mutton"]},
    {cat:"laptop",product:["dell","lenovo","hp","acer","asus","mi","macbook"]}
    
];

const Myitem =()=>{
    return(
        <div className="container mt-3">
            <div className="row">
            <div className="col-lg-12 text-center">
                <h1>react js nested array using map function</h1>
            </div>
            {
            itemlist.map((item,index)=> {
                   return (
                       <div className="col-lg-3 mb-3" key ={index}>
                           <div class ="p-4 bg-warning text-white rounded shadow">
                           <h5>{item.cat}-{item.product.length}</h5>
                           {
                               item.product.map((name,index2)=>{
                              return(

                                <p>{index2}# {name}</p>
                              )

                               })
                           }
                           
                        </div>
                       </div>
                   )


            })


        }
        </div>
        </div>
    )

}
export default Myitem;
