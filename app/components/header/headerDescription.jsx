import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function HeaderDescription() {
    // Extract the URL
    const location = useLocation();
    const currentRoute = location.pathname;
    
    // Apply Header Script 
    const resourceUrl = "https://cdn.shopify.com/s/files/1/0791/4215/8631/files/scripts.js?v=1689446021";
    useEffect(() => {
        const script = document.createElement('script');
        script.src = resourceUrl;
        document.body.appendChild(script);
    });

    return (
        <>
            {currentRoute === '/' || currentRoute === '/index' ?
                <div>
                    <div className='header-image-section'>
                        <div className="header-left">
                            <div className="header-row">
                                <div className="header-row-center">
                                    <h3 className="header-row-title">This is sideways</h3>
                                </div>
                                <div className="header-row-bottom">
                                    <button className="button-down">
                                        <i className="fas fa-arrow-down"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="header-img-wrapper">
                                <div className="header-title-wrapper">
                                    <p className="z-10 font-arial font-bold laptop:pl-[6em] laptop:text-[100px] laptop:leading-[98px] max-[750px]:text-[45px] min-[750px]:text-[45px] max-[750px]:leading-[50px] min-[750px]:leading-[50px] text-[#ffffff] max-[750px]:pt-[45px] min-[750px]:pt-[45px] max-[750px]:pl-[2em] min-[750px]:pl-[2em] laptop:pr-80 relative tablet:mr-44 laptop:pt-[0px]">BEAUTI<span className="stroke laptop:pl-5 max-[750px]:pl-3 min-[750px]:pl-3">FUL</span><br /> SKIN IS<span className="stroke laptop:pl-9 max-[750px]:pl-4 min-[750px]:pl-4">THE</span><br />BEST&nbsp;&nbsp;&nbsp;&nbsp;<span className="stroke laptop:pl-5 max-[750px]:pl-1 min-[750px]:pl-1">JEWEL</span> </p>
                                </div>
                                <div className="header-img-overlay"></div>
                                <div className="player-button-wrapper">
                                    <a href='#' className='play-but'>
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns: a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="213.7px" height="213.7px" viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                            <polygon className='triangle' id="XMLID_18_" fill="none" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="
	                                73.5,62.5 148.5,105.8 73.5,149.1 "/>
                                            <circle className='circle' id="XMLID_17_" fill="none" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="video-modal-wrapper">
                        <iframe className="video-modal" src="https://www.youtube.com/embed/_JbVCOZsN_8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
                : null}
        </>
    );
}

