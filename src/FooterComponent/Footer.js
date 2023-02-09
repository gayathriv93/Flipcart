import './Footer.css'
export const Footer = () => {
    return (<div className=' row footer'>
        <section className='row ' style={{'border-bottom':'1px solid grey'}}>        <div className='col-6 justify-content-center mb-5'>
            <div className='row'>
                <section className='col-3'><span>ABOUT</span>
                    <a href='./'>Contact Us</a>
                    <a href='./'>About Us</a>
                    <a href='./'> Careers</a><a href='./'>Flipcart Stories</a>
                    <a href='./'> Press</a><a href='./'>Flipkart Wholesale</a>
                    <a href='./'>Corporate Information</a>
                </section>
                <section className='col-3'><span>HELP</span>
                    <a href='./'> Payments</a>
                    <a href='./'> Shipping</a>
                    <a href='./'> Cancellation & Returns</a>
                    <a href='./'> FAQ</a><a href='./'>Report Infridgement</a>
                </section>
                <section className='col-3'><span>POLICY</span>
                    <a href='./'>Return Policy</a>
                    <a href='./'>Terms of Use</a>
                    <a href='./'> Security</a><a href='./'> Privacy</a>
                    <a href='./'> Sitemap</a><a href='./'>EPR Complience</a>
                </section>
                <section className='col-3'><span>SOCIAL</span>
                    <a href='./'> Facebook</a>
                    <a href='./'> Twitter</a>
                    <a href='./'> YouTube</a></section>

            </div></div>
            <div className='col-6'>
                <div className='row'>
                    <div className='col-6' style={{'border-left':'1px solid grey'}}><span>MailUs</span>
                        <p >Flipkart Internet Private Limited, </p><p> Buildings Alyssa, Begonia &amp; </p><p> Clove Embassy Tech Village, </p><p> Outer Ring Road, Devarabeesanahalli Village, </p>
                        <p> Bengaluru, 560103, </p><p> Karnataka, India</p>        </div>
                    <div className='col-6'><span>Registered Office Address</span>
                        <p>Flipkart Internet Private Limited, </p><p> Buildings Alyssa, Begonia &amp; </p><p> Clove Embassy Tech Village, </p><p> Outer Ring Road, Devarabeesanahalli Village, </p>
                        <p> Bengaluru, 560103, </p><p> Karnataka, India</p><p> CIN : U51109KA2012PTC066107 </p><p> Telephone: 044-45614700</p>
                    </div>

                </div>

            </div>
        </section>
        {/* <hr style={{'color':'white'}} /> */}
        <section className='row 'id='atag'><a id='atag' href='/'>Become a Seller</a>
        <a id='atag' href='/'> Advertise</a><a id='atag' href='/'> Gift Card</a><a id='atag' href='/'>Help Center</a>
        <a href='/' id='atag'>© 2007-2023 Flipkart.com</a>
        
        </section>
    </div>)
}