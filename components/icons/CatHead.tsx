import React from 'react';

interface DribbbleProps {
    // Define any props you need here
}

const CatHead = () => {
    return (

<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M27.5836 11.8344C28.9261 12.0066 30.1727 12.2762 31.3202 12.6394C38.5844 7.61044 40.3611 7.52961 41.1643 8.22812C41.4382 8.44353 41.6346 8.82933 41.7288 9.35951C42.1697 11.5909 40.9872 16.7316 39.645 19.9029C40.3515 21.6435 40.7094 23.6372 40.6998 25.8637C40.7005 26.2857 40.6882 26.6993 40.663 27.1043C41.2531 27.0435 41.8726 26.9994 42.5292 26.9759C42.8199 26.9653 43.0631 27.1923 43.0733 27.4825C43.0836 27.7721 42.857 28.0163 42.5668 28.0266C41.8588 28.0518 41.1946 28.1023 40.564 28.1727C40.4931 28.744 40.3944 29.2968 40.268 29.8307C41.0294 29.8774 41.8322 29.9594 42.6922 30.0888C42.9791 30.1315 43.1773 30.3999 43.1337 30.6877C43.091 30.9746 42.8226 31.1719 42.5357 31.1288C41.6256 30.9917 40.7804 30.9101 39.9801 30.8683C39.8185 31.3729 39.6298 31.8587 39.4141 32.3255C40.4351 32.5133 41.5159 32.7725 42.6963 33.1446C42.9739 33.2333 43.1271 33.5276 43.0393 33.8048C42.9521 34.0815 42.6568 34.2351 42.3796 34.1478C41.1255 33.7522 39.9844 33.4889 38.9063 33.304C38.3997 34.1783 37.7864 34.9764 37.0674 35.6958C34.1918 38.5741 29.6704 40.0913 23.9926 40.0848C18.2586 40.0788 13.818 38.5755 10.9544 35.706C10.231 34.9807 9.60879 34.1683 9.09047 33.271C8.0126 33.4535 6.87149 33.7143 5.61699 34.107C5.4234 34.1674 5.22098 34.1103 5.08681 33.9761C5.02925 33.9181 4.98375 33.8461 4.95775 33.7621C4.87093 33.4849 5.02553 33.1906 5.30269 33.1033C6.48515 32.7332 7.56731 32.4762 8.58934 32.2906C8.37523 31.8234 8.18793 31.3369 8.02759 30.8318C7.22472 30.8717 6.37644 30.9515 5.46265 31.0869C5.29088 31.1124 5.12653 31.0521 5.01279 30.9379C4.93572 30.8608 4.88233 30.7596 4.86515 30.644C4.82244 30.3566 5.02114 30.0892 5.30805 30.047C6.17195 29.9187 6.97789 29.8383 7.74203 29.7934C7.61672 29.259 7.51897 28.7061 7.44892 28.1355C6.81758 28.0635 6.15251 28.0115 5.44343 27.9846C5.30555 27.979 5.18159 27.921 5.09106 27.8304C4.99171 27.7306 4.93229 27.5909 4.93786 27.4386C4.949 27.1489 5.19367 26.9224 5.48382 26.9335C6.14099 26.9585 6.76093 27.0041 7.35138 27.0663C7.32671 26.6609 7.31508 26.2472 7.31653 25.8257C7.31305 23.6293 7.66104 21.6608 8.35559 19.9347C7.00749 16.7661 5.81557 11.5984 6.2579 9.35951C6.35261 8.82933 6.54853 8.44353 6.82244 8.22812C7.62617 7.52952 9.40327 7.61046 16.6695 12.6414C18.8152 11.9542 21.2853 11.6028 24.0246 11.606C24.1412 11.606 24.2512 11.6064 24.3612 11.6129C25.4889 11.6287 26.5729 11.7039 27.5836 11.8344ZM10.2201 33.1033C11.1449 32.9844 12.0338 32.9122 12.9221 32.8489C13.2113 32.8285 13.43 32.5769 13.4091 32.2872C13.3886 31.9975 13.137 31.7797 12.8473 31.8002C12.7001 31.8106 12.5528 31.8214 12.4054 31.8325C17.2964 29.6055 21.3324 26.2669 24.01 22.2317C26.6786 26.2731 30.7073 29.6206 35.5935 31.8583C35.447 31.8469 35.3007 31.8359 35.1544 31.8252C34.8647 31.8038 34.6126 32.0216 34.5913 32.3108C34.5797 32.4696 34.6391 32.6167 34.7436 32.7212C34.8299 32.8075 34.9464 32.8646 35.0774 32.8739C35.9663 32.9393 36.8558 33.0135 37.7812 33.1346C37.3652 33.7927 36.8802 34.3993 36.3269 34.9531C33.6523 37.6286 29.3886 39.0395 23.9962 39.0335C15.7846 39.0246 11.9794 35.8911 10.2201 33.1033ZM25.4996 28.3012C24.4764 29.3203 23.5293 29.3194 22.508 28.2975C21.6161 27.2706 22.2865 26.4122 24.0061 26.4136C25.7253 26.4164 26.3938 27.2757 25.4996 28.3012Z" fill="currentColor"/>
</svg>


    )

}

export default CatHead

