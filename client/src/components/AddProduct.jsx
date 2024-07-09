import {useEffect, useState, React} from 'react';
import axios from 'axios';
import './AddProductStyle.css'
function AddProduct(){

    let [id, setId] = useState(69);
    let [title, setTitle] = useState(0);
    let [price, setPrice] = useState(0);
    let [description, setDesc] = useState('');
    let [category, setCat ] = useState('');
    let [rate, setRate] = useState(0);
    let [count, setRespo] = useState(0);

  async function addProduct()  {
    const response = await axios.post('http://localhost:2000/addproduct', {id, title, price, description, category, "rating":{rate, count}});
    console.log(response.data)
}


 return(
    <>
        <div className='BodyHome'>
            <div>
  <div style={{ height: '125px' }} />
  <div style={{ height: "100%", width: "100%" }}>
    <h2 className='Wtitles' style={{     fontSize: '52px',
        paddingTop: '5px',
        paddingLeft: '5px'
    }}>
        Add Product
      </h2>
      <div
      style={{
        backgroundColor:'#686D76',
        margin:'0px 40px',
        height:'auto',
        display:'flex',
        padding:'40px',
        flexDirection: 'column',
        alignItems:'flex-start',
        padding: '20px',
        paddingTop: '40px'
      }}>
        <h1 className='Wtitles'>Enter product title:</h1>
        <input type="text" placeholder='Product Title' onChange={(e) => setTitle(e.target.value)} required/>
        <h1 className='Wtitles'>Enter product price:</h1>
        <input type="number" placeholder='Product Price' onChange={(e) => setPrice(e.target.value)}  required/>
        <h1 className='Wtitles'>Enter product description:</h1>
        <textarea name="ProductDescription" cols="100" rows="5" placeholder='Product Description'onChange={(e) => setDesc(e.target.value)}  required></textarea> 
        <h1 className='Wtitles'>Enter product category:</h1>
        <input type="text" list='catergory' placeholder='Product category' onChange={(e) => setCat(e.target.value)} required />
        <h1 className='Wtitles'>Enter product image url:</h1>
        <input type="text" placeholder='Product Image URL' required />
        <h1 className='Wtitles'>Enter product rating and responeses:</h1>
        <input type="number" min='0.0' max='5.0' placeholder='Product Rating'  onChange={(e) => setRate(e.target.value)} required/>
        <input type="text" placeholder='Product Responses'  onChange={(e) => setRespo(e.target.value)} required/>
        <datalist id="catergory">
        <option value="Edge" />
        <option value="Firefox" />
        <option value="Chrome" />
        <option value="Opera" />
        <option value="Safari" />
        </datalist>
        <input type="submit"  value='submit' className='submit' onClick={addProduct}/>
        <div style={{height:'50px'}}></div>
      </div>
  </div>
</div>

        </div>
        </>
    )
}

export default AddProduct;