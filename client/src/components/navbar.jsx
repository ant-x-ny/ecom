import './Navstyle.css';
function NavBar(){
    return(
        <div className='BodyNav'>
        <div style={{display:'flex',padding:'10px',justifyContent:'space-between', alignItems:'center',height:'60px',color:'white'}}>
    <h1 style={{color:'white',fontSize:'45px',width:'25%'}}>Ecommerce</h1>

    <div style={{color:'black',display:'flex',justifyContent:'space-evenly',width:'40%',height:'100%',alignItems:'center',padding:'0px',color:'white'}}>
        <a href="/" className="nav-buttons" style={{color:'white'}}>Dashboard</a>
        <a href="/addproduct" className="nav-buttons" style={{color:'white'}}>Add Product</a>
    </div>
  
    </div>
    </div>
    )
}

export default NavBar;