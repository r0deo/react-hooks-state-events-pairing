 
export default function Comment({ videoInfo }) {
   
 

  return (
    
       
       
        <div>
          <h1>{videoInfo.length} Comments</h1>
          {videoInfo.map((comment) => (
             <div key={comment.id}>
                 <h2>{comment.user}</h2>
                 <p>{comment.comment}</p>
             </div>

          ))}
        </div>
      
     
  );
}
