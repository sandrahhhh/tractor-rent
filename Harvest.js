import React from 'react';
import "./Home.css";
import Product from './Product';
import { Link } from 'react-router-dom';

function Harvest() {
  return (
    <div className='home'>

    <div className='home_container'>
      
      <div className='slider'>
        <div className='but'>
           <Link to ="./"><button className= "category_button" type= "button">plow & Tillage</button></Link>
           <Link to ="./Harvest"><button className= "category_button" type= "button">Harvesting</button></Link>
           <Link to ="./Transport"><button className= "category_button" type= "button">Transport</button></Link>
           <Link to ="./Production"><button className= "category_button1" type= "button">Food Processing</button></Link>
        </div>
      </div>

      <div className='row'>
        <div className= "home_row">
          <Product title= "incubator"
          price= {350}
          image= "https://www.sarozambia.com/wp-content/uploads/2021/11/Solar-Incubator-II-1-1.jpg"
          rating={4}
          id= "1"
          />

          <Product title= "Green maize sheller"
          price= {190}
          image= "http://ayokos.com/vs/saro/wp-content/uploads/2021/09/MAIZE-SHELLER-MANUAL-5TY-1-CROCODILE.jpg"
          rating={4}
          id="2"
          />

          <Product title= "Trimming stand: sheep cotton wool havesting"
         price= {200}
         image= "https://th.bing.com/th?id=OP.AOOl2T0duxuoMw474C474&w=160&h=150&pid=21.1"
         rating={5}
         id="3"
         />

         <Product title= "Red Threasher"
         price= {100}
         image= "http://ayokos.com/vs/saro/wp-content/uploads/2021/09/THRESHER-MULTICROP-AMAR-MODEL-NO.AMT-03-TRACTOR-PTO-DRIVEN.jpg"
         rating={3}
         id="4"
         />
        
         <Product title= "yellow harvestor"
         price= {220}
         image= "https://www.sarozambia.com/wp-content/uploads/2021/11/Harvesters-and-Threshers.jpg"
         rating={3}
         id="3"
         />
        
        </div>

        <div className= "home_row">
        <Product title= "Blue Loan Moer"
        price= {150}
        image= "https://media.gettyimages.com/photos/blue-lawn-mower-against-white-background-picture-id1147054040?k=20&m=1147054040&s=612x612&w=0&h=pAaObg0-Qm5fhUEeTIJlX-H17TOF2plCyHZjKZ2zB7s="
        rating={5}
        id="6"
        />

        <Product title= "Electric Sheep Sheer"
        price= {100}
        image= "https://th.bing.com/th?id=OP.0zSsccZIRkOL%2fA474C474&w=248&h=248&o=5&pid=21.1"
        rating={5}
        id="7"
        />

       <Product title= " Goat milking machine"
        price= {450}
        image= "https://th.bing.com/th?id=OP.YC8eZ0K%2bIBomoA474C474&w=160&h=150&pid=21.1"
        rating={4}
        id="8"
        />
        

        <Product title= "Vevor milking Machine"
        price= {2100}
        image= "https://th.bing.com/th?id=OP.4MZzcKtPAdb8Qw474C474&w=165&h=150&pid=21.1"
        rating={5}
        id="9"
        />

        <Product title= "Heavy duty Galvanizer"
        price= {600}
        image= "https://th.bing.com/th?id=OP.QtuTFZWTUZeCAQ474C474&w=160&h=150&pid=21.1"
        rating={5}
        id="10"
        />
        </div>

        <div className= "home_row">
       <Product title= "Cow pulsating vacum"
        price= {250}
        image= "https://th.bing.com/th?id=OP.P4u9sqtTlGzwEA474C474&w=248&h=248&o=5&pid=21.1"
        rating={5}
        id="11"
        />

        <Product title= "Brooder"
        price= {300}
        image= "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAB4AHgDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAQFAwYHAgEI/8QAQBAAAgEDAwIDBAYGCAcAAAAAAQIDAAQRBRIhBjETIkEHUWGxFCMygZGhFSRCcXKyFmNzkqLB0fAlQ1JihLTh/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EACcRAAIBAwMCBgMAAAAAAAAAAAABAgMREgUhMQRBExRCUXGBMqHw/9oADAMBAAIRAxEAPwDrlKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUrySqgsxCqoJYscAADJJJqrGvaEx8upWgHpucr+JYAVDdgW1K1vqXqNOn7ATiPx7y5Z4bC37CR1GWkcjnYvGfiQPWtIs+tPaMnjPLp+nXyHzjYsqBFBwdkkXlIHrycYz6VrClUnHKMdirkls2dbpXLB7SepE3GXpu3ZVIDFL2RME4IB3RnnkV9i9q19KJWTpK6lSFiksltevLGjAFiCy22O3Pek6U4K8lYlST4OpUrmi+1QAsJul9WjKrvYK24hRkbjujXivq+1zQBt8XSdYQEbgVW3bIwDkZkHFZknSqVztfa50eQN1prSZ99vakfiLis6e1Xoh/tNqMf9pa5/kc0BvtK0tPaZ0AwG7Upo/g9leE/wCBDUhfaH7P37a3GP4rW+X+aIUBtlKqtN1/QtYW4fS7xLtbcxrKYlkAVpASoy6jk4NWW9ff86i4PdK8BlJOCDjvSpBr/Vt81rphgjbEt8/gDvkRAbpD9/Cn+KtK0e0e91Kzt5Nrxb/HlUKeY4fMVPPYnav31tfVl50vaTaYNbW5d5knFqtslw5VVKeIziF1AHKjJ/yqPoN30rMmoXOheKWt9q3TTx3KSKwRpEQG4ycevBqrZNii6gjh1bU72e6jsxb2EjWFpJdTXMY8JCAx+oYDzPu9OePurzoFvHysVlGODldT1CD+dxW1x24UsSB2O4n8yaiXq5B91eUtYr05YR4+T1lptOUcm9zXG0aGZCniB1JyBF1ArANt27gJXPPpnFQv6JQgKI11NVVy6rb6xZOA/HmAER54H4fCrSGJhjjsSPuyampCvqi/gK2qanUl+e/2YR6CPZlDP0xd3BmaaTqWUzRrDKz3MFyZI1fxAjnaMjPOPfzWWXS+pPL/AMX6oTYUZc2gfBUqRkrKvuX8B7uNkSCLj6qPn/sX/SpccMY7Ko/cMfKud6mlzE1WnN+o0dtN1wBt+qXrBgAwuNChw2AFGSJCc/H4n384Gs9V37n1DTnPqLnRUCk+bnYIyueScgZ+PFdFEZA4eQfwvKP5Wr14bkcXsifxy3JHzNWjqcW7Yv8ARWWnTXqRzCXTr+QMn0rpplZo3IbTWibKzCY+ZLbfz9lvN247Vjl0XUJUdRB02pdCiyQrdRFMhRuUugGRjg/E/d06SGYDIv4G+DOG/KVDVbcG4AcAWrE5UE2tk/J4HJirXztNvdP++zLydRcNETTJtU6U6U0CPTLK2utS1GW81W98dsQJb7liEufEj5IMSr5vU8Gp+k9X9VXuoaZaXOjWSW93drbS3ETzARfVSTsftuudqEgE8/KJ1fPZLfwWEqtILe00qBYklWFYizTzicosZJwVQKoI7n7sHR6Wk2p/SYopoZlj1K6nWa4guWnwsFnBc7kjVgCHmVQSexr0OVc4jfvpfhXlqpziWREb3YkYxAfvzj/Z4V4j2/SIX2gkOi59QN2cUpF7Bmodctv1iMGCzmFvo5P63M0bRmWaY7oFU8t5AfuA9cH10cm3TdYYqqtLqTxsFYsPq7e2j+0effWTq3SLu/1S6uIrBrofQbe3t2S6tYfBmjkmdt6XAyQQw7MPyr30/a3emaRcx3Nt9GlN/cTrCXjfbHJJGFJMTFfT31lU4fwXhyj1rIlZ7KMOywMpeVc7UZlkAG7HJPuHP+dZroKzduduPjgntUS+8S6ns2yixQxyBzgl2ZmBAU5wBxz/ALxjuL8Lyyj03HthR3NeLNwdkj2YKSu+wjtxyfi3zqZHAMjitdi6m0v1dDyeFZhjn3suKnxdS6VwfOR/VNG/zYVaVNvsRGaXcvVhUY5xWdYh7/TiqiLqLRX7ySp/ax7R+IYipqa1ozji8h+9gPma5ZUn7G6qr3JvhfEV5aHvivCahpr42XUB/dIv+tZBcWzZ2yxt/CwPyrPwy6m/ciyQE88VHW23XFsCMqZ4cj4BwTU53jPZgfdyK8wuhuIQGH2vQg9gTW1KmskZ1JvFnPOsJnk6k1plnx4c9rEEaGCRfqLZF5MqHj7RIzjjtxmrj2eRETa/KZBJsttOtkcRpGQC9xIwbZ3PAya1rX3SXW9fcnzfpC9zxnKrIybcVt3s/RFtNdkQEB7+3Tkkk+Hbg5JP8VfSvg+eN2ixviJPPioB+NKjrKw1HSrcY2SpeXEnvzDJaon87f7FKhEmbUTsu5c9mCOP7oH+VVl1J+r3PwjDf3WDGrXWI3kniKEZWIK2c+8kVrupi8gsb+aNbZvBtbiRkuVZ4nVULEMoI9M8HIPY8GqyV9iYuzTKy5ukgjeSUuqkEKQjFmOP2R761HVdTmuQYyfDi4GzOGfHrIT3/d2+dWB1cgkNp+lN68ad4OR/4s8fyp+lLN8CXTLIgjPlm1iMf+y4/KuOPR4u9zrl1eStY1cGLdyqHhu4B9RWRI7c7cxJ9jPbHurYTddPNgvo5Jzj6jUZSf7t1auPzr34nScnfTr2MgY4fS2H+KCP510OnIwU4murFb+TyEeX9l3X3e41kRIxs89wPKc4nk5PHvNX/g9KtjCajHtGB+q2sg/d9RfL8qCy6a4Iu7hMDgy2GogAcdzDNKKjCZbOBRBW2BhcXOQpOTIrc49QymvWbhCdt1L9jd5kiOTn4KKu/wBG6Ay7U1mxUbSMySX8R7Y/5tkR+def0LYOT4es6Y3l2qP0laA+vpOsRquMycoFMt1qSlQt8RlcnKEYPHA2sKuem7/VH13RI5rnfFJJcF1zJzttpWHDMR3xXn+jN45Hg3FvLhSPqrnTJc8/1d5n8ql6RoGr6fqukXdxDKIIJZEeQwvs+sgeNfOjMgyTjv61Ki77ohyTXJKvuh7u8vdRvYtaRPptxPcCGW0ciMTOZNgdJeQM/wDTV/0xo1zoVjd2txdRXMs969z4kSMihfCjiC4bnPlJ++rBZBgZPp6VmjfJxW9zAkx7fGgOF3bowGwMhS4JGe/oPwpWMORdWiAfbmRfwIPFKlAlaol2sqyR20s8bKAfAAZkYe9cg1r+qyXEmm6vB9Cv0eaxuYk3WlxyzIR+yhrecU5+NTj3IucSTp7qvZbO+hah9dbh1AEDMBhTiQeJlTz2OD8OOIrabrMYhMmk6qgcske6wufOygkgBUJ9Cfu/Hu+KY/fViD8/tmIAyRTR7JTE3iwTR4kzjYS6gZ9Md68GW1IZTLGGDjKswBHY9jX6CIz3GcYIzzyKxS2lnOsqzW0Eqy48VZYo3EmAAN4Yc9h+FAcDAt2ZsNGRxgqykfiK++Ev1mB2x2/+V3CXQunZneSbSNMkdlVGaSzt2JUEkDJX4moMvRvR0rSMdGtEZ0CZgDwhcZ5QRMADz3Az293AHHtgB448ueMjmm6Y7PrpTnPdifnXV36C6RYxlba7j2oUIivrwbu3mbdITnj8/wAIrezrQCIwl5qyFXLMRPE5ZTk7cSRED05x6fHJA5ifEIbd4bebHniib5rRcwM00fhxPAPHSSGNY5EaPzhlZQDniuhy+zeDEvgazeKScxCe3tpFUYH29gRj69iPy5iz+za+cypFrcIjkiKEy2DFwWyp4SYDtQE7T7a4+hWRkmleV7aCSVpiXdpHjVmJY/GrGCF0bLMCBz2r4sWrRAIdMutsYEYKGBgQnlBGJM81niTUJWWMWVxGW4LzKFRB6sTn0rKxYmWWnBp4NRkmdtsTiCAKojRmJBkJ+0SR254pVpHGIo441ziNFQZ7kKMc0rRFTJSlKkClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQH/9k="
        rating={5}
        id="12"
        />

        <Product title= "Brooder/Incubator"
        price= {400}
        image= "https://www.bing.com/th?id=OP.wo46OAJT%2fqAM7Q474C474&o=5&pid=21.1&bw=0&bc=FFFFFF&w=140&h=140&qlt=100&dpr=0.9&c=17"
        rating={5}
        id="10"
        />

        <Product title= "Nut Picker - (Ground nuts)"
        price= {550}
        image= "https://www.bing.com/th?id=OP.1jLPj5f8NkAyog474C474&o=5&pid=21.1&w=128&h=128&qlt=100&dpr=0.9&bw=6&bc=FFFFFF&c=17"
        rating={5}
        id="10"
        />

        <Product title= "Maize sheller/Threasher"
        price= {250}
        image= "https://www.bing.com/th?id=OP.nwIPwE%2bXopcJkQ474C474&o=5&pid=21.1&w=128&h=128&qlt=100&dpr=0.9&bw=6&bc=FFFFFF&c=17"
        rating={5}
        id="10"
        />
        </div>
        <div className= "home_row">
      
        </div>
        <div className= "home_row">
        </div>
        <div className='slider2'>
          <Link to ="./Login"><button className= "home_signupBtn"type= "button">sign up</button></Link>
          <span>Sandra Masiwa:</span>
          <span>+260771647266 </span>
          <span>sandramasiwa1@gmail.com</span>
        </div>
        
      </div>
    </div>
  </div>
    
  )
}

export default Harvest;