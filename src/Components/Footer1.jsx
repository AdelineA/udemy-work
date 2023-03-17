import React from "react";
import { NavLink } from "react-router-dom";
import "./Body.css";

export default function Footer1() {
  return (
    <footer class="text-white mt-12 w-screen h-auto foot">
      <div class="border-1 w-screen border-gray-200 mt-4 ">
        <div class="flex px-11 py-2 mt-14">
          <div class="flex-col mr-32 mt-10">
            <h2 class="font-semibold text-xl ">Teach the world online</h2>
            <p class="font-normal text-sm mt-2">
              Create an online video course,reach the student across the globe,
              and earn money
            </p>
          </div>
          <button class="px-2 py-2  mt-10 border-2 text-white ml-96 hover:bg-gray-700 text-base w-fit h-12 foot">
            Teach on Udemy
          </button>
        </div>
      </div>
      <div class="border-2 w-screen border-gray-800 mt-2 mb-4 ">
        <div class="px-11 flex mt-10">
          <h1 class="font-normal text-base flex">
            Top companies to choose{" "}
            <span class="text-violet-500 mr-1 ml-1 text-base font-medium">
              Udemy Business
            </span>{" "}
            to build on demand career skills
          </h1>

          <svg
            class="ml-8"
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.9213 4C25.4658 4 28.9307 5.05106 31.8777 7.02028C34.8249 8.98949 37.1219 11.7884 38.4783 15.0631C39.8347 18.3378 40.1897 21.9412 39.4981 25.4175C38.8066 28.8939 37.0999 32.0872 34.5935 34.5935C32.0872 37.0999 28.8939 38.8066 25.4175 39.4981C21.9412 40.1897 18.3378 39.8347 15.0631 38.4783C11.7884 37.1219 8.98949 34.8249 7.02028 31.8777C5.05106 28.9307 4 25.4658 4 21.9213C4.02072 17.1747 5.9155 12.6283 9.27191 9.27191C12.6283 5.9155 17.1747 4.02072 21.9213 4V4ZM21.9213 6.25C18.8313 6.25667 15.8126 7.17862 13.2463 8.89945C10.6799 10.6203 8.6808 13.0629 7.50142 15.9188C6.32203 18.7748 6.0152 21.9162 6.61965 24.9465C7.2241 27.9767 8.71275 30.7599 10.8977 32.9449C13.0826 35.1298 15.8658 36.6184 18.896 37.2228C21.9263 37.8273 25.0676 37.5205 27.9237 36.3411C30.7796 35.1617 33.2222 33.1627 34.943 30.5962C36.6639 28.0299 37.5859 25.0112 37.5925 21.9213C37.5836 17.7698 35.929 13.7913 32.9913 10.8578C30.0537 7.9244 26.0727 6.27547 21.9213 6.2725V6.25ZM11.4588 13.5062C12.507 12.2012 13.7888 11.1026 15.2387 10.2663L19.1875 21.145H24.745L28.6713 10.3113C30.0231 11.1059 31.226 12.1299 32.2263 13.3375L26.6013 28.0525L24.5087 22.7425H19.12L17.0612 28.0525L11.4588 13.5062ZM34.4875 17.1625C35.6317 20.2416 35.6142 23.6324 34.4379 26.6995C33.2616 29.7665 31.0073 32.2995 28.0975 33.8238L34.4875 17.1625ZM25.3075 34.915C23.0134 35.5033 20.6056 35.4839 18.3212 34.8588V34.5775L21.7863 25.5775L25.24 34.5775L25.3075 34.915ZM15.475 33.6775C13.3629 32.5249 11.5998 30.8253 10.3707 28.7569C9.14147 26.6884 8.49145 24.3274 8.48875 21.9213C8.47693 20.3879 8.7359 18.8645 9.25375 17.4213L15.475 33.6775ZM21.9213 8.48875C23.0791 8.48625 24.2324 8.63373 25.3525 8.9275L21.9775 18.31L18.6025 8.91625C19.6862 8.6341 20.8014 8.49046 21.9213 8.48875V8.48875Z"
              fill="#D1D7DC"
            />
          </svg>
          <svg
            class="ml-2"
            width="115"
            height="44"
            viewBox="0 0 115 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 13V28.0195H11.9824V19.0077H15.9723V28.0195H22.9544V13H5Z"
              fill="#D1D7DC"
            />
            <path
              d="M29.342 13V28.2065H32.6308V18.6024L39.9196 28.2065H42.7344V13H39.4752V22.3966L32.3938 13H29.342ZM70.7932 13L64.4822 28.2065H67.8599L69.2525 24.8272H75.2376L76.6302 28.2065H80.0671L73.7858 13H70.7932ZM57.6971 13.7114V16.646H56.3342V19.462H57.6971V24.9162C57.6971 27.5887 59.0731 28.3843 61.0748 28.3843C62.1735 28.3843 62.964 28.1424 63.6526 27.7322V25.094C63.1773 25.3561 62.6262 25.509 62.023 25.509C61.2917 25.509 60.986 25.1367 60.986 24.3826V19.462H63.6822V16.646H60.986V13.7114H57.6971ZM50.0528 16.4385C46.6917 16.4385 44.3344 19.1597 44.3344 22.4559V22.4855C44.3344 26.02 46.9097 28.4732 50.3787 28.4732C52.467 28.4732 54.0148 27.6456 55.0898 26.3094L53.2231 24.6494C52.3177 25.4912 51.507 25.8351 50.4083 25.8351C48.9423 25.8351 47.9195 25.0691 47.5936 23.5823H55.6231C55.648 23.2811 55.6527 22.9515 55.6527 22.693C55.6527 19.4181 53.907 16.4385 50.0528 16.4385ZM87.7707 16.4385C86.0688 16.4385 84.9524 17.2293 84.156 18.306V16.646H80.8968V31.645H84.156V26.6947C84.9311 27.6219 86.0273 28.4139 87.7707 28.4139C90.5073 28.4139 93.0151 26.3141 93.0151 22.4559V22.3966C93.0151 18.5395 90.4646 16.4385 87.7707 16.4385ZM101.222 16.4385C99.5217 16.4385 98.4337 17.2293 97.6372 18.306V16.646H94.3484V31.645H97.6372V26.6947C98.4112 27.6219 99.4766 28.4139 101.222 28.4139C103.958 28.4139 106.467 26.3141 106.467 22.4559V22.3966C106.467 18.5395 103.915 16.4385 101.222 16.4385ZM106.141 16.646V17.0017H106.852V19.2249H107.237V17.0017H107.978V16.646H106.141ZM108.452 16.646V19.2249H108.837V17.0906L109.607 19.2249H109.844L110.615 17.0906V19.2249H111V16.646H110.407L109.726 18.6024L109.044 16.646H108.452ZM72.245 17.0017L74.2302 21.8927H70.2303L72.245 17.0017ZM50.0528 19.0767C51.43 19.0767 52.2892 20.0394 52.4824 21.5073H47.5343C47.7927 20.0228 48.6934 19.0767 50.0528 19.0767ZM86.9115 19.2249C88.4392 19.2249 89.7263 20.4793 89.7262 22.3966V22.4559C89.7262 24.3957 88.4392 25.6276 86.9115 25.6276C85.3838 25.6276 84.1263 24.3743 84.1263 22.4559V22.3966C84.1263 20.4793 85.3838 19.2249 86.9115 19.2249ZM100.393 19.2249C101.923 19.2249 103.208 20.4793 103.208 22.3966V22.4559C103.208 24.3957 101.923 25.6276 100.393 25.6276C98.8663 25.6276 97.578 24.3743 97.578 22.4559V22.3966C97.578 20.4793 98.8663 19.2249 100.393 19.2249Z"
              fill="#D1D7DC"
            />
          </svg>
          <svg
            class="ml-2"
            width="115"
            height="44"
            viewBox="0 0 115 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M67.2652 10V17.4433C67.9683 16.9646 68.7589 16.6292 69.5918 16.4563C70.4246 16.2834 71.2834 16.2765 72.1189 16.4359C72.9545 16.5953 73.7504 16.9179 74.4611 17.3853C75.1718 17.8526 75.7834 18.4556 76.2608 19.1595L76.338 19.2656C77.0602 20.3948 77.3919 21.7298 77.2822 23.0657C77.1725 24.4016 76.6274 25.6645 75.7306 26.6607C74.7122 27.8355 73.2924 28.5884 71.7486 28.7722C70.9923 28.9024 70.2175 28.879 69.4704 28.7035C68.7234 28.5279 68.0193 28.2037 67.4002 27.7502C67.3134 28.0202 67.2556 28.2323 67.1784 28.483H64.2859V10.6846L67.2652 10ZM74.3325 22.592C74.355 21.8888 74.1685 21.1948 73.7967 20.5976C73.4248 20.0004 72.8843 19.5269 72.2433 19.2369C71.6024 18.9468 70.8899 18.8533 70.1958 18.9682C69.5018 19.083 68.8573 19.401 68.344 19.882C67.8306 20.3631 67.4714 20.9855 67.3117 21.6706C67.152 22.3557 67.199 23.0728 67.4468 23.7313C67.6946 24.3897 68.132 24.9599 68.7037 25.3697C69.2755 25.7796 69.9559 26.0108 70.6591 26.034H70.7362C71.666 26.0421 72.5622 25.6869 73.234 25.044C73.9057 24.401 74.2999 23.5212 74.3325 22.592V22.592Z"
                fill="#D1D7DC"
              />
              <path
                d="M8.47088 24.52C8.72823 24.906 9.05936 25.2373 9.44524 25.4949C9.83111 25.7525 10.2641 25.9312 10.7193 26.0208C11.1745 26.1104 11.6429 26.1091 12.0977 26.017C12.5524 25.9249 12.9844 25.7438 13.3688 25.4841C13.5672 25.3525 13.7514 25.2007 13.9184 25.031C14.0348 24.8817 14.195 24.7725 14.3766 24.7189C14.5581 24.6653 14.7519 24.6699 14.9308 24.7321C15.6346 24.9249 16.3481 25.0888 17.2448 25.3106C16.8692 25.8916 16.4536 26.4457 16.001 26.9689C15.1804 27.8389 14.1268 28.4543 12.9659 28.7416C11.8049 29.0288 10.5859 28.9757 9.45432 28.5887C8.30151 28.2676 7.26922 27.6132 6.48703 26.7075C5.70485 25.8018 5.20761 24.6852 5.05774 23.498C4.85039 21.9243 5.24318 20.3303 6.15794 19.0332C7.0727 17.7361 8.44234 16.8311 9.99425 16.4981C10.8174 16.3041 11.6709 16.2752 12.5054 16.4129C13.3398 16.5506 14.1387 16.8523 14.8559 17.3005C15.5731 17.7488 16.1944 18.3347 16.6838 19.0244C17.1733 19.7141 17.5212 20.494 17.7076 21.3189C17.7029 21.3735 17.7029 21.4283 17.7076 21.4829C17.9004 22.3602 17.8715 22.447 16.9748 22.6206L9.02045 24.4043C8.83165 24.4082 8.64525 24.4475 8.47088 24.52V24.52ZM7.89238 22.1288L14.2559 20.6826C13.8867 20.0896 13.3421 19.6263 12.6977 19.3567C12.0533 19.0872 11.3409 19.0249 10.6595 19.1785C9.93748 19.2963 9.27462 19.6494 8.77414 20.183C8.27367 20.7166 7.96366 21.4007 7.89238 22.1288V22.1288Z"
                fill="#D1D7DC"
              />
              <path
                d="M101.802 24.52C102.279 25.2574 103.016 25.7881 103.866 26.0061C104.717 26.2241 105.619 26.1135 106.391 25.6963C106.673 25.5688 106.926 25.3851 107.134 25.1563C107.519 24.5971 107.973 24.655 108.522 24.8189C109.072 24.9828 109.785 25.1178 110.45 25.2817C109.974 26.3462 109.197 27.2478 108.214 27.8753C106.785 28.8139 105.042 29.1472 103.368 28.8019C101.694 28.4566 100.226 27.461 99.2854 26.0337C98.8228 25.3679 98.4952 24.6177 98.3213 23.8258C98.1712 23.0064 98.1844 22.1654 98.3602 21.3512C98.5361 20.5369 98.871 19.7654 99.3458 19.0809C99.8206 18.3965 100.426 17.8126 101.127 17.3627C101.828 16.9129 102.611 16.6059 103.431 16.4596H103.643C105.081 16.25 106.547 16.5272 107.808 17.247C109.07 17.9669 110.054 19.088 110.605 20.4319C110.758 20.9225 110.884 21.4215 110.981 21.9264C111.077 22.3217 110.894 22.4952 110.489 22.582C107.78 23.1798 105.07 23.7969 102.361 24.4139L101.802 24.52ZM107.587 20.6633C107.136 19.9617 106.446 19.4465 105.646 19.2127C104.845 18.9788 103.987 19.042 103.229 19.3906C102.004 19.9306 101.088 21.1936 101.301 22.0806L107.587 20.6633Z"
                fill="#D1D7DC"
              />
              <path
                d="M32.8844 24.5203C33.1351 25.3977 34.7163 26.2365 36.0083 26.0919C36.9403 26.0129 37.8098 25.5902 38.4476 24.906C38.519 24.8305 38.6061 24.7716 38.7027 24.7333C38.7993 24.6949 38.9031 24.6782 39.0068 24.6842C39.8263 24.8385 40.6362 25.0409 41.5522 25.2434C41.127 26.1806 40.4618 26.9888 39.6239 27.5863C38.9528 28.0991 38.1873 28.4748 37.3711 28.6917C36.5549 28.9087 35.7039 28.9628 34.8668 28.8509C34.0297 28.739 33.2228 28.4633 32.4922 28.0395C31.7617 27.6157 31.1217 27.0522 30.609 26.3811C29.9884 25.5729 29.5717 24.627 29.3941 23.6236C29.1292 22.0063 29.5073 20.3494 30.4478 19.0072C31.3883 17.665 32.8164 16.7438 34.427 16.4406C36.0822 16.0976 37.8059 16.4231 39.222 17.3461C40.6381 18.2691 41.6318 19.7147 41.9861 21.3675C42.1982 22.3316 42.1693 22.3316 41.263 22.5727L33.4243 24.3467L32.8844 24.5203ZM38.6694 20.6636C38.2497 20.0168 37.6272 19.5277 36.8996 19.2729C36.1719 19.0181 35.3802 19.0122 34.6488 19.256C33.5593 19.5741 32.2191 20.9047 32.3637 22.0906L38.6694 20.6636Z"
                fill="#D1D7DC"
              />
              <path
                d="M46.2667 17.3759L47.4237 16.7492C48.5464 16.1384 49.8656 15.9985 51.0914 16.3601C52.3172 16.7217 53.3493 17.5552 53.9607 18.6775C54.3539 19.3992 54.5594 20.2082 54.5585 21.03V28.5409H51.8492C51.4154 28.5409 51.5214 28.2034 51.5214 27.9624V22.6595C51.518 22.1461 51.4761 21.6336 51.3961 21.1265C51.1261 19.6995 50.1427 19.0631 48.5036 19.1981C47.9043 19.2108 47.3345 19.4604 46.9189 19.8923C46.5032 20.3242 46.2757 20.9032 46.286 21.5025C46.2813 21.5247 46.2813 21.5477 46.286 21.57V27.7888C46.286 28.3577 46.1607 28.6084 45.5436 28.5601C44.9266 28.5119 44.0299 28.5601 43.22 28.5601V17.2023C43.22 16.6431 43.4032 16.4985 43.9238 16.5274C44.4566 16.566 44.9915 16.566 45.5243 16.5274C46.0161 16.4792 46.3921 16.5853 46.2667 17.3759Z"
                fill="#D1D7DC"
              />
              <path
                d="M17.052 16.5272H19.9445C20.147 16.5272 20.4169 16.8647 20.5037 17.1057C21.3907 19.3715 22.2585 21.6469 23.1262 23.9223C23.213 24.1537 23.3094 24.3755 23.4637 24.7322C23.6083 24.4333 23.7047 24.2405 23.7915 24.0477C24.6882 21.7433 25.5849 19.439 26.4526 17.1153C26.6261 16.6622 26.8286 16.4597 27.3396 16.4886H30.0682C29.6825 17.4528 29.3451 18.3109 28.998 19.169C27.7831 22.1193 26.5619 25.0697 25.3342 28.02C25.2932 28.1774 25.1961 28.3143 25.0611 28.4049C24.926 28.4955 24.7625 28.5335 24.6014 28.5117H22.3549C22.2348 28.4976 22.1195 28.4564 22.0177 28.3912C21.9158 28.3261 21.83 28.2388 21.7668 28.1357C20.2145 24.4623 18.6911 20.702 17.1677 17.0189C17.1172 16.8581 17.0786 16.6937 17.052 16.5272V16.5272Z"
                fill="#D1D7DC"
              />
              <path
                d="M60.5747 11.5327V15.7847C60.5747 16.3921 60.7676 16.5946 61.3461 16.5367C61.7759 16.4982 62.2082 16.4982 62.638 16.5367C62.7923 16.5367 63.043 16.7199 63.043 16.8356V19.4003H60.6037V28.5213H57.6147C57.5183 28.5213 57.3641 28.1452 57.3641 27.9428V19.4292H55.9178C55.4357 19.4292 55.3779 19.3424 55.3875 18.9568V17.0188C55.3875 16.6717 55.5322 16.556 55.8696 16.556C56.2071 16.556 57.0266 16.6621 57.2098 16.421C57.3578 15.9476 57.407 15.4488 57.3544 14.9555V12.6994C57.3544 12.5162 57.5087 12.2173 57.6437 12.1787C58.5885 11.928 59.5527 11.7545 60.5747 11.5327Z"
                fill="#D1D7DC"
              />
              <path
                d="M92.6802 12.2754H95.9198V16.0549C95.9198 16.4309 96.0451 16.5852 96.4115 16.5756C96.9253 16.5466 97.4403 16.5466 97.9542 16.5756C98.0477 16.5912 98.1357 16.6304 98.2099 16.6894C98.2841 16.7485 98.3421 16.8254 98.3784 16.913V19.4198H96.6911C96.1512 19.4198 95.8812 19.5452 95.8908 20.1912V28.483H92.738V20.114C92.738 19.6319 92.6031 19.4391 92.1113 19.4777C91.6196 19.5162 91.2629 19.4777 90.7519 19.4777V16.9034C90.7519 16.7877 90.9543 16.6623 91.0797 16.5756C91.205 16.4888 91.2339 16.5756 91.3207 16.5756C92.7091 16.5756 92.7091 16.5756 92.7091 15.1775L92.6802 12.2754Z"
                fill="#D1D7DC"
              />
              <path
                d="M81.516 28.5894H78.7778C78.3054 28.5894 78.4211 28.2326 78.4114 27.9627V17.0869C78.4114 16.6627 78.5561 16.5084 78.9803 16.5181H81.4582C81.4735 16.803 81.509 17.0866 81.5643 17.3665L85.0449 16.4024V19.4877C84.6014 19.5552 84.1386 19.6034 83.6854 19.6998C83.3778 19.7217 83.0776 19.8044 82.8022 19.9431C82.5267 20.0817 82.2815 20.2736 82.0807 20.5076C81.8799 20.7416 81.7274 21.0131 81.6321 21.3064C81.5369 21.5997 81.5007 21.9089 81.5257 22.2163C81.5209 22.2482 81.5209 22.2807 81.5257 22.3127V27.7891L81.516 28.5894Z"
                fill="#D1D7DC"
              />
              <path
                d="M89.3257 28.512H86.4332C86.4332 28.2517 86.4332 28.0396 86.4332 27.8275V17.2217C86.4332 16.6817 86.5778 16.4889 87.1178 16.5275C87.6577 16.566 88.3904 16.5275 89.0461 16.5275C89.345 16.5275 89.4896 16.6239 89.4896 16.9517V28.3288C89.4457 28.3987 89.3902 28.4606 89.3257 28.512Z"
                fill="#D1D7DC"
              />
              <path
                d="M87.9173 10.2698C88.4125 10.2692 88.8889 10.459 89.2479 10.8001C89.6068 11.1411 89.8209 11.6072 89.8456 12.1017C89.8456 12.6131 89.6425 13.1036 89.2808 13.4652C88.9192 13.8268 88.4287 14.03 87.9173 14.03C87.3938 14.0404 86.8873 13.8436 86.5081 13.4825C86.1289 13.1214 85.9077 12.6251 85.8926 12.1017C85.9049 11.8483 85.9671 11.5999 86.0756 11.3707C86.1841 11.1414 86.3368 10.9358 86.5249 10.7657C86.7129 10.5955 86.9328 10.4641 87.1717 10.379C87.4106 10.2939 87.664 10.2568 87.9173 10.2698V10.2698Z"
                fill="#D1D7DC"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="106"
                  height="18.9265"
                  fill="white"
                  transform="translate(5 10)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div class="flex px-11 mr-32 mt-10 ">
        <div class="flex flex-col text-base font-normal">
          <NavLink to="#">Udemy Business</NavLink>
          <NavLink to="#">Tech on udemy</NavLink>
          <NavLink to="#">Get the App</NavLink>
          <NavLink to="#">About Us</NavLink>
          <NavLink to="#">Contact Us</NavLink>
        </div>
        <div class="flex flex-col ml-20 text-base font-normal">
          <NavLink to="#">Careers</NavLink>
          <NavLink to="#">Blog</NavLink>
          <NavLink to="#">Help and Support</NavLink>
          <NavLink to="#">Affiliate</NavLink>
          <NavLink to="#">Investors</NavLink>
        </div>
        <div class="flex flex-col ml-20 text-base font-normal">
          <NavLink to="#">Terms</NavLink>
          <NavLink to="#">Privacy Policy</NavLink>
          <NavLink to="#">Cookies settings</NavLink>
          <NavLink to="#">Site maps</NavLink>
          <NavLink to="#">Accessibility ststement</NavLink>
        </div>
        <div class="px-2 py-2 mt-10 border-2 text-white ml-96 hover:bg-gray-700 text-base w-fit h-12 foot">
          <button className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            English
          </button>
        </div>
      </div>
      <div class="flex mt-36 px-11">
        <svg
          class="w-20 h-auto mb-4 text-white text-5xl bg-white"
          viewBox="0 0 91 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.05 8.112L7.024 4.056 0 8.112V4.056L7.025 0l7.026 4.056v4.056h-.001z"
            fill="#A435F0"
          />
          <path
            d="M0 11.518h3.68v8.941c0 2.31 1.725 3.436 3.345 3.436 1.634 0 3.346-1.156 3.346-3.467v-8.91h3.68v9.154c0 2.128-.669 3.77-2.007 4.896-1.339 1.125-3.011 1.673-5.05 1.673-2.037 0-3.71-.547-5.017-1.673C.669 24.443 0 22.862 0 20.763v-9.245zM45.866 22.63c-1.114.992-2.383 1.478-3.83 1.478-2.64 0-4.41-1.504-4.61-3.833h11.89s.08-.752.08-1.458c0-2.19-.7-4.015-2.13-5.505-1.398-1.49-3.222-2.22-5.443-2.22-2.341 0-4.258.73-5.779 2.22-1.49 1.49-2.25 3.436-2.25 5.87v.12c0 2.403.76 4.319 2.25 5.749 1.49 1.429 3.467 2.159 5.87 2.159 2.794 0 5.017-1.102 6.685-3.002l-2.733-1.578zm-6.994-7.463c.82-.639 1.825-.973 2.95-.973 1.064 0 1.946.334 2.707 1.004.726.61 1.118 1.359 1.152 2.22H37.52c.118-.89.568-1.64 1.353-2.25zM82.91 29.276C81.417 32.801 79.855 34 77.46 34H75.8v-3.262h1.342c.824 0 1.59-.31 2.32-1.994l.73-1.686-6.296-15.54h3.741l4.471 11.192 4.593-11.192h3.74l-7.53 17.758zM28.377 5.649v7.257c-1.206-1.08-3.082-1.723-4.896-1.723-2.16 0-3.984.76-5.474 2.31-1.46 1.521-2.19 3.406-2.19 5.687 0 2.282.73 4.167 2.19 5.718 1.49 1.521 3.315 2.282 5.474 2.282 2.49 0 4.064-.979 4.896-1.746v1.411h3.65V5.65h-3.65zm-1.095 16.878c-.882.882-2.007 1.339-3.315 1.339-1.308 0-2.372-.457-3.254-1.339-.85-.882-1.277-2.007-1.277-3.345 0-1.339.426-2.464 1.277-3.346.882-.882 1.946-1.338 3.254-1.338s2.433.456 3.315 1.338c.912.882 1.37 2.007 1.37 3.346 0 1.338-.458 2.463-1.37 3.345zM68.222 11.214c-2.772 0-4.213 1.15-5.2 2.258-.395-.753-1.507-2.258-4.105-2.258-2.196 0-3.49 1.11-4.136 1.9V11.52h-3.618v15.327h3.618v-8.82c0-2.068 1.278-3.558 2.98-3.558 1.735 0 2.738 1.308 2.738 3.406v8.971h3.619v-8.82c0-2.098 1.246-3.558 3.04-3.558 1.734 0 2.737 1.308 2.737 3.405v8.972h3.65v-9.488c0-3.996-2.148-6.142-5.323-6.142z"
            fill="#000"
          />
        </svg>

        <p class="float-right text-base font-sans para">2023 Udemy,Inc</p>
      </div>
    </footer>
  );
}