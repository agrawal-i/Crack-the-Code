import './singlePost.css'

export default function singlePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img className='singlePostImg'
            src="https://images.unsplash.com/photo-1569018747791-23c5aaec35c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
            />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor, sit amet 
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author:<b>Sudipa</b></span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDescription'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odit hic quis amet numquam, ea,
                 pariatur placeat laborum voluptates non atque alias cupiditate inventore, distinctio assumenda. Eaque debitis neque beatae!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odit hic quis amet numquam, ea, pariatur placeat laborum voluptates non atque alias cupiditate inventore, distinctio assumenda. Eaque debitis neque beatae!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odit hic quis amet numquam, ea, pariatur placeat laborum voluptates non atque alias cupiditate inventore, distinctio assumenda. Eaque debitis neque beatae!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odit hic quis amet numquam, ea, pariatur placeat laborum voluptates non atque alias cupiditate inventore, distinctio assumenda. Eaque debitis neque beatae!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odit hic quis amet numquam, ea, pariatur placeat laborum voluptates non atque alias cupiditate inventore, distinctio assumenda. Eaque debitis neque beatae!
            
           
            </p>
        </div>

      
    </div>
  )
}
