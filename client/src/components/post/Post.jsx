import  "./post.css"

export default function Post() {
  return (
    <div className="post">
       <img 
       className="postImg"
       src="https://images.unsplash.com/photo-1661956600655-e772b2b97db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt=""/>
       <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit

        </span>
        <hr/>
       <span className="postDate">1 hour ago</span>

        
       </div>
      <p className="postDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium obcaecati 
        aliquid adipisci pariatur nulla eaque distinctio dolorem eveniet! Doloribus reiciendis harum eos. 
        Modi officia quae explicabo nesciunt accusamus velit exercitationem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium obcaecati 
        aliquid adipisci pariatur nulla eaque distinctio dolorem eveniet! Doloribus reiciendis harum eos. 
        Modi officia quae explicabo nesci
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium obcaecati 
        aliquid adipisci pariatur nulla eaque distinctio dolorem eveniet! Doloribus reiciendis harum eos. 
        Modi officia quae explicabo nesci</p>
    </div>
  )
}
