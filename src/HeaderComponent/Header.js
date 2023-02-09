import './Header.css';
import logo from './Assets/logo.png';
export const Header = () => {
    return (<div className='header'><div className=" row">
    <section className='col-7 head1 h-100'>
        <div className='col-2'><img className='h-100' style={{ 'maxWidth': '100%' }} src={logo} alt='./'></img> </div>
        <div className='col-4 col-md-7 search'><input className='col-10' type={'text'} placeholder='Search for products, brands and more' />
        <button className='col-2 srch_btn'><svg width="20" height="20" viewBox="0 0 17 18" className="" xmlns="http://www.w3.org/2000/svg"><g fill="#2874F1" fillRule="evenodd"><path className="_34RNph" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path className="_34RNph" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg>
        </button> </div>
    </section>
    <section className='col-5 head2'>
        <div className='col-3 '><a href='/' className='text-decoration-none btn'>Login</a></div>
        <div className='col-3 d-none d-md-block' > <a className='text-white text-decoration-none text-center ' href='./'><span>Become a Seller</span></a></div>
        <div className='col-2 d-none d-md-block ms-3'> <a href='/'><span>More</span> 
        <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="zZ3yfL">
            <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="_2gTTdy"></path></svg></a></div>
<div className='col-2 d-none d-md-block'>
<svg className="V3C5bO" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
<path className="_1bS9ic" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg><span>cart</span></div>
        </section>
</div></div>)

}