// import React from 'react'
// import styles from "./single.module.css"

// import { Addbutton } from "./AddButton/Addbutton"
// import { Buybutton } from "./Buybutton/Buybutton"
// import {useDispatch} from "react-redux"
// import { useParams } from "react-router-dom"
import React, { useContext, useEffect, useState } from 'react';
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Flex, Grid, GridItem, HStack, Img, Input, Skeleton, SkeletonCircle, SkeletonText, Stack, StylesProvider, Text, useMediaQuery } from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi'
import { IoMdShareAlt } from 'react-icons/io'
import { MdRestartAlt } from 'react-icons/md'
import { HiCurrencyRupee } from 'react-icons/hi'
import { AiFillStar } from 'react-icons/ai'
import { BsLightningCharge } from 'react-icons/bs'
import ReactImageMagnify from 'react-image-magnify'

import {  Link, useParams } from 'react-router-dom';
import styles from "./scroll.module.css"

// function SingleProduct() {

//   // const dispatch=useDispatch()

//   // const {id}=useParams()
  












//   return (
//     <div>
//     <div>
//    <h1>single page</h1>
//      <div className={styles.onemain}>
//         <div className={styles.leftbox}>
//             <div className={styles.verticalline}>
                
            
//            <img className={styles.smallimg} src="/" alt=""  />
//           
              
//             </div>
//                 <div className={styles.imgdivbox}>
//                     <img src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70" alt="" /><div className={styles.buttbox}>
//                     <Addbutton data="ADD TO CART" />
//                     <Buybutton data="BUY NOW"/>
//                 </div>
//             </div>
//         </div>




//         <div className={styles.rightbox}>

//             <div style={{color:"gray",fontSize:"12px"}}>home / Mobiles & Accessories / Mobiles</div>
//             <div>ApplE iPhone 100</div>
//             <div style={{color:"gray",fontSize:"15px"}}><span className={styles.ratetext}>rating <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" alt="" /></span>  4.487,421  Ratings & 5,244 Reviews <span><img style={{width:"70px"}} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" /></span></div>
//             <div className={styles.pricedivone}><span>price</span><span>₹ discountPrice</span><span>10%off</span></div>
//             <h5>Available offers</h5>
//             <div className={styles.offer}><span><img className={styles.offertag}  src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /></span><span className={styles.offerline}>Bank Offer 5% Cashback on Flipkart Axis Bank Card <span className={styles.tandc}>T&C</span></span></div>
//             <div className={styles.offer}><span><img className={styles.offertag}  src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /></span><span className={styles.offerline}>Special PriceExtra ₹4000 off(price inclusive of discount) <span className={styles.tandc}>T&C</span></span></div>
//             <div className={styles.offer}><span><img className={styles.offertag}  src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /></span><span className={styles.offerline}>Freebie CoinDCX Get Bitcoin Worth ₹201 <span className={styles.tandc}>T&C</span></span></div>
//             <div className={styles.offer}><span><img className={styles.offertag}  src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /></span><span className={styles.offerline}>Get Google Nest hub at just ₹4999 <span className={styles.tandc}>T&C</span></span></div>
//             <div style={{color:'#2455f4',fontWeight:"700",fontFamily:"Roboto,Arial,sans-serif"}}><span>View 5 more offers</span></div>
//             <div style={{display:"flex",gap:"20px",alignItems:"center",marginTop:"20px"}}>
//               <img width={90} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="flipkart assuresd" />
//               <p style={{width:"80%"}} >1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In-Box Accessories <span style={{color:"#2455f4"}}>know more</span></p>
//             </div>
//             <div>
//                 <div style={{display:"flex",gap:"10px"}}>
//                   <div style={{display:"flex",gap:"20px"}}>
//                       <span style={{color:"grey",fontWeight:"650"}}>Highlights</span>
//                       <div width={50}>
//                         <li>2 GB RAM | 32 GB ROM | Expandable Upto 1 TB</li>
//                         <li>16.51 cm (6.5 inch) HD+ Display</li>
//                         <li>8MP Rear Camera | 5MP Front Camera</li>
//                         <li>Unisoc T612 Processo</li>
//                       </div>
//                   </div>  
//                   <div style={{display:"flex"}}>
//                       <span style={{color:"grey",fontWeight:"650"}}>Easy Payment Options</span>
//                       <div style={{}}>
//                         <li >EMI starting from ₹2,325/month</li>
//                         <li>Cash on Delivery</li>
//                         <li>Net banking & Credit/ Debit cards</li>
//                         <p style={{color:"#2455f4"}}>know more</p>
//                       </div>
//                   </div>  
//                 </div>
//                 <div style={{display:"flex",gap:"50px",textAlign:"center",alignItems:"center"}}>
//                 <span style={{color:"grey",fontWeight:"650"}}>Sellers</span>
                
//                 <div width={50} style={{display:"flex",gap:"10px",alignItems:"center"}}>
//                   <div>
                    
//                   </div>
//                   <span style={{color:"#2455f4",fontWeight:"600"}}>HariSinghBisht</span>
//                    <div style={{display:"flex",gap:"5px",backgroundColor:"#2455f4",alignItems:"center",borderRadius:"8px",color:"white",padding:"2px 3px 2px 3px",fontSize:"12px"}}>
//                       <p>4.9</p>
//                       <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" alt="" />
//                    </div> 
                    
//                 </div>
                
//             </div>  
//             <li style={{marginLeft:"100px",width:"65%"}}>7 day seller replacement policy/brand assistance for device issues*</li>
//               <div style={{width:"300px",marginTop:"20px",marginLeft:"20px"}}>
//                 <img width={300} src="data:image/png;base64,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" alt=""/> 
//               </div>
           
//             </div>
//         </div>
//     </div>
    
//       {/* : <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" alt="Loading..." />*/}

//     </div>
//     </div>
//   )
//   }

// export default SingleProduct


// price:'₹{Math.round(initdata.price-(initdata.price*10/100).toFixed(0))}'


const SingleProduct = () => {


  const [isLargerThan720] = useMediaQuery('(min-width: 720px)')


//   if ("isloading") {
//     return (
//         <>
        
//             <Stack>
//                 <Skeleton height='20px' />
//                 <Skeleton height='20px' />
//                 <Skeleton height='20px' />
//                 <Skeleton height='20px' />
//                 <Skeleton height='20px' />
//                 <Skeleton height='20px' />
//                 <Skeleton height='20px' />
//                 <Skeleton height='20px' />
//                 <Skeleton height='20px' />
//                 <Skeleton height='20px' />
//                 <Skeleton height='20px' />
//                 <Skeleton height='20px' />
//                 <Skeleton height='20px' />
//                 <Skeleton height='20px' />
//                 <Skeleton height='20px' />
//                 <Skeleton height='20px' />
//                 <Skeleton height='20px' />
//                 <Skeleton height='20px' />
//                 <Skeleton height='20px' />
//                 <Skeleton height='20px' />
//                 <Skeleton height='20px' />
//             </Stack>
//         </>
//     )
// }
// if ("iserror") {
//     return (
//         <><Alert
//         status='error'
//         variant='subtle'
//         flexDirection='column'
//         alignItems='center'
//         justifyContent='center'
//         textAlign='center'
//         height='500px'
//       >
//         <AlertIcon  boxSize='40px' mr={0} />
        
//         <AlertTitle mt={4} mb={1} fontSize='lg'>
//        Opps!
//         </AlertTitle>
//         <AlertDescription maxWidth='2xl'>
//           Thanks for Your Patience. Please Refresh.
//         </AlertDescription>
//       </Alert>
//         </>
//     )
// }



  return (
    <>
    <div>
    <HStack p="10px" display={{ base: 'block', md: 'flex', lg: 'flex' }}>
        {/*  {viewData.map((item, index) => (   key={index}  {item.image}  magnifyimg`${item.image}`*/}
               <Box  w={{ base: '100%', md: '40%', lg: '40%' }} h={{ base: "100h", md: "100h", lg: "100h" }} >
                <Box display={"flex"} p="15px">
                    <Box w="15%">
                        <Box display={{ base: "none", md: 'block', lg: "block" }} p='7px' border={"2px solid #2974F1"} m="auto" >
                            <Img w={{ base: "0px", md: "30px", lg: "45px" }} m='auto' src="data:image/jpeg;base64,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" alt="smallImg" />
                        </Box>
                    </Box>
                    <Box w="79%" p='10px' minH={'400px'} display='flex' justifyContent={'center'} alignItems={'center'} >
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'flipkart clone project',
                                isFluidWidth: true,
                                src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhgPEhISEREREhEPDxEREREPERAPGBgZGRgUGBgcIS4lHB4sHxgYJjgmKy8xNTU1GiU7QDszPy40NTEBDAwMEA8QHhISHjEhISE0MTQxNDUxNDQ0NDQxMTQ0NDQ0MTQ0NDQxNDQxNDE0MTQxNDQ0NDQ0MTQxNDQ0NDE0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgQFBgcBAwj/xABMEAABAwIBBgYOBQsDBQAAAAABAAIDBBEFEiExQXGxBgcyUWGhExUXIjNTcnOBkZOywdFSVGKS4RQWI0JDY4Kio8LSNETwJDVFg+L/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKhEAAgIBBAEDAwQDAAAAAAAAAAECEQMEEiExQRNRcSIykQVhgbEUQlL/2gAMAwEAAhEDEQA/ANmQhCAEIQgEOIGcmwGck5rKOmxuBptlFxGnIaXKJxyudJIYGGzGGztWU7XfoCrOL8IKWjAEjrvIuGNGU89NtAG1WUVVsq5eEXY8IYvovN+Zujaldv4vov8AurOcM4d0czwx2VEXGzS9rQCdozetW9jIyMoEEHOMzVZRiyrbRL9vovov+6u9vY/ov+6osQN5wNoaF4ywZP4aDsU7UNzJrt9F9F/3Ul3CCIaWv+6oElUfhvj8rHNo6YE1E5DWZOdzQTki32icw9KhxSCk2aLWcOqKHNLIIz9F7mB33b36kxPGjhXj/Ux5+CqeB8WEAaJK576iZ/fPa17mMadYyh3zz03GxTZ4B4WB/pR7SW/vKVibMpamEf3JHupYV48+zf8AJHdSwrx59m/5KJfwJwsf7Vv35f8AJYvj1A2CrmgsWMZI8MBuTkXu3PrzEJLG4q2XxZ45G0vBvw40sK1TOOyKU/2rvdRwrxzvZS/4r5quu3KzNj6TPGlhQ0zOG2KQf2o7qeFePPs3/JfNd0uJhcQ0AlxIa0DSScwCEH0h3U8K8efZv+S53U8Kvbsx25D7blUIOCWHhrQacEhoBJfJcm2cnOvdvBDDj/tm/fk+a6/8OdeAuS84dw8w2ocGR1LMo6GuOST6NKssbw4ZTSCDoINwVi2IcXlJI09hy6d+lrg5z2X1Xa7PbYQlcX3CSpoqw4VWuJBOTG5xytVxZ2sEZwdoWGTDKHZLTRtaEIWQBCEIAQhCAEIQgBcK6kv0HYUBQ3P718h0knrcfkFhdXO+pqHve7vnvdpOgXNhsAW6MYTE4X77n6c6yLhJwamZK+aBjnxvJe5jAS+NxzkFozlt9BC0a6M0yClhyW5VxnvaxvoWvcXVe+WjblkuLC5gJzktabDqt6llFFgtVO4NbE9jb9857XMY0dJO5bJwUw5tNA2JvJY2xcc2U7S5x5rkou7Jl1RZKZgcTcjMLWNtFsxSWHS29wDmOr0Jo6oiJyS9mVzZQunDLatHRoVkubKt8UNJ81/Ss/wJgm4QuL84p43OYNV2xhoPreSr/V/rf81KgcEL9v576exSbo0l2iH9r+DV3Osmk01kud6hq2osuiDPLmhdTV9KrWMYfTVJypomucBYPu5j7c12kXG1etVU9Ki56npW6Slwyibi7XA0dwaoPE/1Jf8AJeR4PUPif6kv+SW+q6V5OqltHDD/AJRdZ5+7/Ifm/Q+J/qSf5J1Q4ZSwvEkcTQ8Z2uc57i3pGUTYpn+VJbKldMcGNcqK/B0RzSfbLJHVp9BU3VWhnUtSSXWsoqjphMtFNJdULjIYI62iqG5nuOS4jWGPaR75V1oVSuNY/p6NusGR3rdGB7q8nWUkdSdo3OidlRMcdJY0nbYJwmeF+Ajvp7HHfbkhPF5hAIQhACEIQAhCEAJL9B2FKSX6DsKApdKO9O35pnU4cHm40p7S8kj09Z+a86uN7o3NjcWPIsHjSM63MRlFhme51etU/jD4QvgyaOBxaXjKe9uZwbe1hzEm+daFGCGgOOU4NAc46SQNKyfjLw94mbVAEsA7G8jPknKJaT0EE+pRK6Jj2VLscmVlHLyy0vDruuWj9a60Xi24SySOdSTOLy0ZUb3G7i24BB57EjP0rPG4k4Oysxd2LsGgHvOjmPSrTxa4e8zOqiCGAGNp+k4kOdboAHWFRVaos+uTU6s8r/moKgcFnWx+oP7qTdGr5Me9JWfcH3Wx2oP7uTcxWl4M39r+DSKqbMq9XTKSqpFX66RawZxSiR9TMoueVe1S9Rsr11QZlKIPkSC9ebnLl11QkUo9OyJbHrwATiCO63jItEf02dT+HMJsoqhgvZWjDabQq5MlI7cUSYw+HQs24yagSVcJGdrHmNv8LmX6yVouLV4pacv/AGj/ANHCNZcf1tgFysr4XNs+l8473mLwdVn3ZFBfLPbxadrSzyv9kj6KwzwEfm2bk6TTDPAR+bZuTtZHCdQhCAEIQgBCEIASXaDsKUkv0HYUBSIXWzjTc7yvYPaddug5k3Zo9e8pS3MT2NucesKLxOhbIDoNxZwIDmuHMQcxCe5I5kZA5kIKWeB1Ll5XYGXvflSZP3cuysdBQiMAAAACwAAa1o5gBmCkcgcy6ESSFnlPmas8wU2x2o8h+5i0Sp5JWb4SbY5UeQ/cxVn4LeGXWqeq/XPUvVPUDWvWkEckiLqXJg9O53Jq5dcEc0meS6GpYYvaOK63iiliY41JUtMu0tJfUp+godGZXcqN8ULFYfSdCslNG2NhkeQyNjS97nZg1oFySuUFFYXNgALkmwAA0klU7hXj4qj+TQH/AKZjgXvGbs7wcx8gaufSvN1erjjjz2ezo9JLLNRXXljXEMVdW1XZM4iZdkDDmsz6RHOdPqURw0Fn0vlv95ilMKgsbqO4cC0lL5x++NeLhm55dz8n0mvhHHo3CPSo+g8M8BH5tm4J0muGeAj82zcE6XcfLnUIQgBCEIAQhCAF5yuyWudzNJ9QXovCs8E/yH+6UBS2aPSd5Skhmj17ylLcwZ1C4uqwBCEIDyqDmWa4ebY3UeS/cxaVUclZnSG2NVHkv3MVJ+Cy6Zaap+ZQVW5StVIoWpN1tBHHNjGReQYnGRcpzBSXXXHg5Wm2NooCVJ0tETqT+jw4nUrBQYXozJLIkbY8DZH0GHdCsdJQtY0veQxjAXPe45LWtGkkr2lENLH2adwYwaBpc930WjWVnvCXhFLWHIAMVM03ZEDyzqc8/rHo0DrXn6nWxgq8ns6TRSn1wvc9+E/CU1N6anuymBs9+h1QRz8zOjXr5lDQQJNPCpakp189lzSySts+o02GOONJDrD4LKv8P22kpPOP96NXKlisFUeMVtpKTy5PejXVpl9SMP1KV4Wvj+zeMJdeCM/YA9Wb4J6o/BP9OzY73ipBegz5oEIQgBCEIAQhCAF4Vngn+Q/3SvdeNULxuHOxw6igKQ3R695SlxnxO8rq3MTqFxCsQdQuIQHnUclZjAbYzUbHjqYtNqOSsvBtjFRsfuYqvtE/6snql6j3suU9eLr2paMuOhbxdHOsbkxrTUhJ0KwUGGX1KQw3CtGZWSno2Rtyn2aB6z0AKsstHTDTEfQ4V0IxPGIqUFkYEsui36jT9o69gScUxRxBYzvG6DblO2nVsVTqnLz8+pfUT2NNoF90/wAEbitVJO8ySvL3aBfM1o5mjQAmDYk9makRsXi5sjcrZ60EkqXQumhUvTRJtTRKYp4lXHF3ZvupHtAxUrjLFpaPy5PeiV/jYqFxni0tH5cvvRL0tOqkjzNdK8T/AI/s27BP9OzY73ipBR+Ci1OzyTqtrKkF3s8FAhCFBIIQhACEIQAkv0HYUpJfoOwoCiN+J3lKSW/E7yurdGDOoXF26sAXrBTvebMaXW020D0ryVjw9oZG0DWMo9JKrJ0TFWRDKZ0ZcZI3khhyABlAu576Fjv/AJio/j3MW91b+9OxYTTMysanHQ/cxUTuSNNvFFlpaQuIVpwrC9GZJwjD9BsrHmjbYcrcrznRvjxVSXYjvIhoBdzahtUTXVZdnJ/BetVKVETklcmSbZ62m06XL7GdVJdRkxT2cJjIuKSs9Bx4Gj2rsTEPKVE7OuWcLZVOiSpWKYp2KLo1NU4WkIlZT4PdjFn3GqLS0Xly+9EtJY1Zzxsi0tF5c3vRLtwr6kebqpXjZtmG+Bj82zcnSbYb4GPzbNycrqPKOoQhACEIQAhCEAJL9B2FKSX6DsKAojfid5XVxvxO8rq3RgwQhCsAU3h0+VGBrb3p+ChF6QTOYbjYRqIVZK0TF0yaqn96dixzBGZWPTj7Lz1MWlVVe8g6AOa11nfBlt+EE/kSHqYs6ao2g05I1mjYI2ZWvVtTOtro2ctwB5tJUVwq4RNpwImHv7Z/sD5rN6zHXPJOUT6VdQ3cy6O2Mox5fZos2MRc6bOxGF361vUVmzsTdzlDcRPOreli9jVatrpmivDH8l7TtNlGVkbm6QfgqvFijhrKk6bGjoJygdIOcFUlpIS+10dOP9Qa4krQSzgLkNQLpdRTxzi8bsh/0Sbscd7VBSukhfkPBaRqPNzg6wuLNppQ7O5ZMeWNwfPt5LrQy3VipSqNhNXe2dXKgfcLmjHk5pyJmMLN+NzwtF5c2+FaTEVm/G6f01EPtzH0ZUS6ca+pHn55fQzasM8DH5tu5OU2w3wMfm2bk5XQeedQhCAEIQgBCEIASX6DsKUkv0HYUBQx8TvK6uD4neV1bowYLq4hWB1C4hAeVRySqJwenEeOVUruTHBNIdgawq91HJOxZXWzmPEqy2l8bmegmInqBVZK2kXg65G2N4q+aVz3E3c4k9HQokyFLqNKbqX2WUm+WevZEoSLwRdQTuHLZiveOqKj8pdDktltxPU1eQdKmmzR1DOxyZ/ouHKYecH4KlslspCkqyDpWsZKS2y5RaOWUHcXRJwtfTShj87TnY8cl7ej5K+4NPlAKowuZUR9jfm1sdrY/U4fLWprg897D2N/KabdBGojoK4dRp9krj0ztx6r1Vz2XqnOZZLxn4gJMSihabtpwxruiRzg5w9WSrvjnCiOjjIBElQRZkYN8k6nP5h0aSsZnmdJUNke4ue+UPe46XOLgSUx42lbObPlTe1H1dhngY/Nt3Jym2GeBj823cnKsYHUIQgBCEIAQhCAEl+g7ClJL9B2FAUIfE70pJHxO9dW6MGdQuIVgdQuIQHlUck7FkmKC+J1H8W5q1uo5J2LKa1t8VqB0O3NVfK+SV0yKnZnTctUlUxZ0zcxaSXJEXwNyFyy9i1JLVSi1nkQuL0LUktUFrEr2idZIyUtgQhsmMOqCCM6tEgfLEexuc2Rgu3JOSXt1suOpUqmNirRg9VYhdMWmqZi20+Cs1B09e1Rh8MzzjPeCtfCyh7HIJWjvJruzaGyDlD06fWqn+2Z5bPeCyzdF8fZ9ZYb4GPzbNycpthvgY/Ns3JyuQ3OoQhACEIQAhCEAJL9B2FKSX6DsKAoN852neUJLjn9J3ouuhGDFISbruUlAVdcSboupIEVHJOxZk5mVjFQOh+5i0yoPenYs5pm3xmoH2XbmKJdotHpnnW0+dRckStVbT6VET060KIhXMXm5ikXwrwdEoomxkWoLU6MaSY1VokbZKU1q9chKDFUmzsLVM0DrFRsTFJ0bM61iykkTuIUv5RSPZa72Dssflt1ekXHpWajwsfls94LW8JGjrWZ41SdhrzDoDZ2lvkOcHN6iq5HcS2NUz6jw3wMfm2bk5TbDfAx+bZuTlcpudQhCAEIQgBCEIASX6DsKUkv0HYUBnxOf0nehJJz+k711dKMGdQk3RdCBSEm6LoBM/JOxZ/hovjdR5D9zFfpz3p2Kh4R/wB7n8h+5irLtF49MsVVBdRNRSqzSRpnLTrSyhVpaVNX06s8tImclL0KSCvOgXmYVOPpeheLqVKJshjCgQqYNKgUiihZHxQqVo4UuKkUnS0ymgSGHMsqVxg0+TiEMmqRkRPlNeWnqyVf6VllTeMlv6ekdzl7fU9h+Kzn9paHZvWGeBj823cnKa4Z4CPzbNydLnNjqEIQAhCEAIQhACS/QdhSlwhAZyw3z2te+bmzpS4RYkHSC4HaCV1dK6MGCEIQgEIXLoBE/JKoWCG+Nzm1u8fuYr7NoVBwxwZjjw7N2VjsnpJY139pVZdotHyXwtXm5icWXLK5UZuhXi+n6FIlq4WKSCIfS9C8nUimTGudiU2KIT8j6F1tIpnsKBEliiNZS9CdRQ2ToRpQYoskGNsqPxlH9LR+XJ70SvYVD4wTl1VJEM7spziNYDnsAP8AKfUs59Fodm8YUf8Ap4z+6j90J4muHNyYY2nSI2A7ckJ0sDYEIQgBCEIAQhCAEIQgKVwgoTFKXgfo5DlA6mvOkHeo1aFNE17SxwDmkWLSLgqEn4MRk3je+P7OZ7Rsvn61pGfHJnKPsVhCsH5rnx/9P8V381z47+T8VffErsZXkKwfmufHf0/xXfzXPjv5PxTfEbGV14uFReF+GStkZXU4PZYCC4AXLmg3BA12zgjmK1z81z47+T8V4S8EMr9vb/1//Shyi0SotGfYPw1pJmgSvFPIMzmvuGl2stdottspduOUZziqg9qz5qRq+KymmOVI9pcc5cyJ0bztLXgH0hM3cTFHqmlHPrzetV3sttR59u6P61B7WP5o7d0f1qD2sfzXr3GaLx03rCO4xReOm6lPqMjYjy7dUf1qD2sfzR26o/rUHtY/mvXuMUXjpupHcYovHTdSeoxsR5duqP61B7WP5o7dUf1qD2sfzXr3GKLx03UjuMUXjpupPUY2I8e3VH9ag9rH80duqP61B7WP5r27jFF46bqR3GaLx03UnqDYiJxHhfRQtJEzZnW71kPfknytA9ajOA+Dz4riHbGduTCwgtFjkgDktHONOfWTdXrDeKjDYnBzmvlIzjLJI9RuFeKSljiYI42tYwaGtFlSUmyyike4C6hCqWBCEIAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCA4F1CEAIQhACEIQAhCEAIQhACEIQAhCEAIQhACEIQH//2Q==",
                               
                            },
                            largeImage: {
                                src: "data:image/jpeg;base64,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",
                                width: 1200,
                                height: 1800,
                               
                            },
                            enlargedImageContainerDimensions: {
                                width: '400%',
                                height: '170%',
                                border: "1px solid blue",
                                marginBottom:"100px"
                            }
                        }}
                        />
                        {/* <Img  maxH={{base:"500px",md:"300px", lg:"100%"}} mw='450px' m='auto' src={item.image} /> */}
                    </Box>
                    <Box p='15px' h='53px' bg="white" borderRadius={'50%'} marginLeft="1px" shadow={'base'}  > <FaHeart color="silver" size="25px" /> </Box>
                </Box>
                <Flex pt='30px' pl="30px" display={{ base: 'none', md: 'block', lg: 'block' }} alignContent={"center"} justifyContent="space-around" w="100%" m="auto" color={"white"}  >

                    <Button alignItems={"center"}
                        size='md'
                        // onClick={handleAddToCart}
                        height={{ base: '30px', md: '40px', lg: '55px' }}
                        width='45%'
                        bg="#FE9E00"
                        rounded='1px'
                        fontSize={{ base: '10px', md: '13px', lg: '18px' }}
                        _hover={{ backgroundColor: "#FE9E00" }}
                        mr="5px"
                    > <HiShoppingCart />
                        ADD TO CART
                    </Button>
                    <Link to='/cart'>
                        <Button
                            size='md'
                            // onClick={handleBuyNow}
                            height={{ base: '30px', md: '40px', lg: '55px' }}
                            width='45%'
                            bg="#FB641B"
                            rounded='1px'
                            fontSize={{ base: '10px', md: '13px', lg: '18px' }}
                            _hover={{ backgroundColor: "#FB641B" }}
                        >
                            <BsLightningCharge />
                            BUY NOW
                        </Button>
                    </Link>
                </Flex>

                <Flex zIndex={100} display={{ base: 'block', md: 'none', lg: 'none' }} position={"fixed"} bottom="0" alignContent={"center"} justifyContent="space-around" w="100%" m="auto" color={"white"} bg="white">
                    <Button alignItems={"center"}
                        size='md'
                        height="50px"
                        width='48%'
                        bg="white"
                        rounded='1px'
                        color={"black"}
                        fontSize="15px"
                        _hover={{ backgroundColor: "#ffff" }}
                    >
                        ADD TO CART
                    </Button><Button
                        size='md'
                        height="50px"
                        width='48%'
                        bg="#FB641B"
                        rounded='1px'
                        fontSize="15px"
                        _hover={{ backgroundColor: "#FB641B" }}
                    >

                        BUY NOW
                    </Button>
                </Flex>
            </Box>

                    {/*  ))} */}
                    {/*  {viewData.map((item, index) => key={index) (*/}
            <Box  w={{ base: '100%', md: '60%', lg: '60%' }} pt="-50px" h="100vh" overflow={{ base: "none", md: "auto", lg: "auto" }} pl="2%" className={styles.exmaple}>
                <Box display={{ base: "none", md: "block", lg: "block" }} > <Text p="15px" display="flex" alignItems="center" float="right"> <IoMdShareAlt /> Share</Text></Box>
                <Box> <Text color={"silver"} > brand </Text></Box>
                <Text fontWeight={"500"}> description</Text>
                <Text fontSize={"12px"} color="green"> Special price</Text>
                <Box display={"flex"} alignItems="center" fontWeight={"500"} fontSize={"12px"}> <Text fontSize={"25px"} pr="10px"> ₹discount price </Text>  <Text pr="10px">  <del> ₹price </del> </Text>  <Text pr="10px" color="green"> discount % Off</Text></Box>
                <Box fontSize={{ base: '10px', md: '11px', lg: '15px' }} fontWeight={"500"} mb="15px" color={"#868786"} mt="8px" display="flex" alignItems="center" > <Box bg="green" color={"white"} pl="5px" pr="5px" display="flex" alignItems="center" borderRadius={"25px"} > stars <AiFillStar /></Box>
                    <Text pl="12px" pr="6px"> ratings</Text> and <Text pl="6px" pr="12px"> review</Text>
                    <Img w="60px" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="logo" />
                </Box>

                <Text> Copons for you</Text>
                <Box display={"flex"} mb="5px" mt="5px" alignItems="center" fontSize={{ base: '8px', md: '10px', lg: '15px' }}> <Img w="18px" mr="5px" src="https://rukminim1.flixcart.com/www/36/36/promos/30/07/2019/79f48e86-8a93-46ab-b45a-5a12df491941.png?q=90" alt="small" /> Special Price₹100 off with cashback coupon on First Order <Text color={"#2974F1"} pl="5px">T&C </Text></Box>

                <Text> Available offers</Text>
                <Box fontSize={{ base: '8px', md: '10px', lg: '15px' }} mt="10px" mb="5px" display="flex" alignItems="center" >  <Img w="18px" mr="5px" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="small copoun" />Special PriceGet extra 22% off (price inclusive of cashback/coupon) <Text color={"#2974F1"} pl="5px"> T&C</Text> </Box>
                <Box fontSize={{ base: '8px', md: '10px', lg: '15px' }} display={"flex"} mb="5px" alignItems="center" > <Img w="18px" mr="5px" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="small copoun" />Combo OfferBuy 2 items save 5%; Buy 3 or more save 10% <Text color={"#2974F1"} pl="10px"> See all productsT&C</Text> </Box>
                <Box fontSize={{ base: '8px', md: '10px', lg: '15px' }} display={"flex"} mb="5px" alignItems="center"> <Img w="18px" mr="5px" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="small copoun" /> Bank OfferTest - 10% off on HDFC Bank Cardless EMI, up to ₹500. On orders of ₹3000 and above</Box>
                <br />
                <br />
                <Flex display={"flex"} justifyContent={"space-between"} fontSize={{ base: '8px', md: '10px', lg: '15px' }}>
                    <Box>
                        <Box display={"flex"} mb="15px" alignItems="center"> <Img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg==" alt="" />
                            <Text> Deliver to</Text>
                        </Box>
                        <Box display="flex" alignItems={"center"} borderBottom="1px solid #2974F1"> <Input fontSize={{ base: '8px', md: '12px', lg: '15px' }} zIndex={"-1"} variant='unstyled' placeholder='Enter Delivery pincode' type="text" /> Check </Box>
                    </Box>
                    <Box>
                        <Text display={"flex"} mb="15px" alignItems="center"> <MdRestartAlt size="15px" color='#2974F1' /> 10 Days Return Policy</Text>
                        <Text display={"flex"} alignItems="center"> <HiCurrencyRupee size="15px" color='#2974F1' /> Cash on Delivery available</Text>
                    </Box>
                </Flex>
                <Box pt="20px" fontSize={"12px"}>  <Text>  Usually delivered in8 days</Text>
                    <Text>  Enter pincode for exact delivery dates/charges</Text>
                </Box>
                <Text color='#2974F1' pt={"10px"} fontSize={{ base: '8px', md: '10px', lg: '15px' }}> View Details</Text>
                <Flex display={"flex"} width={{ base: '50%', md: '60%', lg: '30%' }} justifyContent="space-between" pt="10px" fontSize={"12px"}>

                    <Box>
                        Seller
                    </Box>
                    <Box>
                        <Box display={"flex"} alignItems="center">
                            RetailNet
                            <Flex ml="5px" bg='#2974F1' w="35px" color={"white"} alignItems="center" pr="5px" display="flex" pl="5px" borderRadius={"25px"} fontSize="11px"> hidden_stars <AiFillStar /></Flex>
                        </Box>


                        <Text>10 Days Return Policy </Text>
                        <Text> GST invoice available</Text>
                    </Box>
                </Flex>

                <Img w={{ base: '200px', md: '280px', lg: '400px' }} p="20px" src="https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50" />
                <Accordion defaultIndex={[0]} allowMultiple w="100%" p="0px" ml="-9px">


                    <AccordionItem bg="white">
                        <h1>
                            <AccordionButton bg="white" pt={{ base: '15px', md: '20px', lg: '25px' }} pb={{ base: '15px', md: '20px', lg: '25px' }}>
                                <Box flex='1' textAlign='left' fontSize={"20px"} >
                                    Product Details
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h1>
                        <AccordionPanel pb={4}>
                            <Grid templateColumns='repeat(2, 1fr)' gap={5} fontSize="12px" w="53%" >

                                <GridItem> Display</GridItem>
                                <GridItem>16.51 cm (6.5 inch) HD+ Display</GridItem>
                                <GridItem> internal_storage </GridItem>
                                <GridItem> 32GB </GridItem>
                                <GridItem>  processor</GridItem>
                                <GridItem> Unisoc T612 Processor </GridItem>
                                <GridItem>  camera</GridItem>
                                <GridItem>   8MP Rear Camera | 5MP Front Camera</GridItem>
                                <GridItem> Colors</GridItem>
                                <GridItem> Black|Blue|white</GridItem>
                                <GridItem>  battery_capacity</GridItem>
                                <GridItem> 5000 mAh Lithium Ion Battery</GridItem>
                                <GridItem>   Reversible </GridItem>
                                <GridItem>   No </GridItem>
                                <GridItem>   Collar </GridItem>
                                <GridItem> Cut Away</GridItem>

                            </Grid>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Flex alignItems="center" justifyContent={"space-between"} pt="10px" pb="50px">
                    <Box fontSize={{ base: '8px', md: '15px', lg: '25px' }}>
                        <Text fontWeight={"500"}>  Ratings & Reviews</Text>
                    </Box>
                    <Box fontSize={{ base: '10px', md: '11px', lg: '15px' }} mb="15px" color={"#868786"} mt="8px" display="flex" alignItems="center" > <Box bg="green" color={"white"} pl="5px" pr="5px" display="flex" alignItems="center" borderRadius={"25px"} > stars<AiFillStar /></Box>
                        <Text pl="2px" pr="2px"> ratings</Text> <Text> and </Text> <Text pl="2px" pr="2px">reviews</Text>
                    </Box>
                    <Box>
                        <Button bg='#2974F1' color={"white"} pos=''
                            fontSize={{ base: '8px', md: '11px', lg: '15px' }} h={{ base: '18px', md: '30px', lg: '40px' }} _hover={{ bg: "#2974F1" }}>
                            Rate Product</Button>
                    </Box>
                </Flex>
            </Box>
        {/* ))}  */}
    </HStack>
</div>
    </>
  )
}

export default SingleProduct
