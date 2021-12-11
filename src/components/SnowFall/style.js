import styled from 'styled-components'

export const ContainerSnow = styled.div`
    z-index: 1000000;
    width: 100%;
    height: 100%;
    .snow,
    .snow:before,
    .snow:after{
        position: absolute ;
        top: -600px;
        left: 0;
        bottom: 0%;
        right: 0%;
        background-image:
            radial-gradient(3px 3px at 293px 539px, rgba(255, 255, 255, 0.8) 50%, rgba(0, 0, 0, 0)),
            radial-gradient(4px 4px at 221px 202px, white 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(3px 3px at 135px 158px, rgba(255, 255, 255, 0.6) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(5px 5px at 168px 6px, rgba(255, 255, 255, 0.8) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(5px 5px at 504px 313px, white 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(5px 5px at 84px 354px, rgba(255, 255, 255, 0.6) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(6px 6px at 537px 201px, rgba(255, 255, 255, 0.8) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(3px 3px at 273px 268px, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(5px 5px at 190px 331px, white 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(3px 3px at 402px 511px, rgba(255, 255, 255, 0.6) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(5px 5px at 8px 58px, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(5px 5px at 510px 454px, rgba(255, 255, 255, 0.8) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(6px 6px at 438px 535px, rgba(255, 255, 255, 0.6) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(4px 4px at 491px 310px, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(3px 3px at 105px 52px, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(6px 6px at 28px 392px, rgba(255, 255, 255, 0.6) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(3px 3px at 351px 427px, white 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(5px 5px at 184px 260px, rgba(255, 255, 255, 0.8) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(4px 4px at 99px 72px, rgba(255, 255, 255, 0.6) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(5px 5px at 180px 416px, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(6px 6px at 291px 114px, white 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(5px 5px at 9px 270px, rgba(255, 255, 255, 0.9) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(4px 4px at 457px 552px, rgba(255, 255, 255, 0.9) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(6px 6px at 419px 132px, white 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(4px 4px at 372px 152px, white 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(5px 5px at 443px 575px, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(5px 5px at 368px 561px, rgba(255, 255, 255, 0.9) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(4px 4px at 261px 5px, rgba(255, 255, 255, 0.6) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(4px 4px at 413px 340px, rgba(255, 255, 255, 0.8) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(5px 5px at 527px 531px, rgba(255, 255, 255, 0.8) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(4px 4px at 213px 63px, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(4px 4px at 23px 524px, rgba(255, 255, 255, 0.8) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(4px 4px at 454px 188px, white 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(3px 3px at 74px 322px, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(6px 6px at 427px 248px, rgba(255, 255, 255, 0.9) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(6px 6px at 591px 482px, rgba(255, 255, 255, 0.6) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(3px 3px at 361px 105px, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(3px 3px at 238px 556px, white 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(4px 4px at 66px 228px, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(4px 4px at 173px 515px, rgba(255, 255, 255, 0.6) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(5px 5px at 408px 209px, rgba(255, 255, 255, 0.9) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(5px 5px at 220px 318px, rgba(255, 255, 255, 0.8) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(5px 5px at 534px 577px, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(5px 5px at 118px 342px, rgba(255, 255, 255, 0.8) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(6px 6px at 253px 341px, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(3px 3px at 122px 547px, white 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(5px 5px at 493px 267px, rgba(255, 255, 255, 0.9) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(3px 3px at 86px 101px, rgba(255, 255, 255, 0.8) 50%, rgba(0, 0, 0, 0)), 
            radial-gradient(5px 5px at 275px 9px, rgba(255, 255, 255, 0.8) 50%, rgba(0, 0, 0, 0));
        background-size: 600px 600px;
        animation: snow 3s linear infinite;
        content: "";
    }

    :after{
        margin-left: -200px;
        opacity: .4;
        animation-duration: 10s;
        animation-direction: reverse;
        filter: blur(3px);
    }

    :before{
        animation-duration: 15s;
        animation-direction: reverse;
        margin-left: -300px;
        opacity: 0.5;
        filter: blur(1.5px);
    }

    @keyframes snow{
        to{
            transform: translateY(600px);
        }
    }
`