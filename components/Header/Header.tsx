import Link from 'next/link';


const Header = () => {

  return (
    <header className={'fixed z-20 p-10 top-0 flex md:flex-row flex-col items-center justify-between w-full'}>
      <div>
        <Link href={'/'}>
          <a className={'cursor-pointer flex justify-center items-center hover:opacity-80'} href={'/'}>
            <svg width="270" height="44" viewBox="0 0 270 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_8592_1189)">
                <path d="M94.6274 40.9033C94.5525 40.9602 94.4485 40.9588 94.3751 40.9001L91.6058 38.6846C91.5416 38.6333 91.5143 38.5486 91.5363 38.4695L92.4583 35.1503C92.4829 35.0615 92.5638 35 92.656 35H96.3506C96.4397 35 96.5186 35.0574 96.5459 35.1422L97.6173 38.4615C97.6441 38.5445 97.6156 38.6353 97.5461 38.688L94.6274 40.9033Z" fill="#FF0000"/>
                <path d="M105.127 40.9033C105.052 40.9602 104.949 40.9588 104.875 40.9001L102.106 38.6846C102.042 38.6333 102.014 38.5486 102.036 38.4695L102.958 35.1503C102.983 35.0615 103.064 35 103.156 35H106.851C106.94 35 107.019 35.0574 107.046 35.1422L108.117 38.4615C108.144 38.5445 108.116 38.6353 108.046 38.688L105.127 40.9033Z" fill="#F67E0E"/>
                <path d="M12.3218 21.8118C12.4006 21.6739 12.5994 21.6739 12.6782 21.8118L14.3245 24.693C14.4027 24.8298 14.3039 25 14.1464 25H10.8536C10.6961 25 10.5973 24.8298 10.6755 24.693L12.3218 21.8118Z" fill="#B6FF59"/>
                <path d="M217.322 21.8118C217.401 21.6739 217.599 21.6739 217.678 21.8118L219.325 24.693C219.403 24.8298 219.304 25 219.146 25H215.854C215.696 25 215.597 24.8298 215.675 24.693L217.322 21.8118Z" fill="#00D1FF"/>
                <path d="M14.28 26.04H10.48V27.24C10.48 28.32 10.1733 29.1933 9.56001 29.86C8.94667 30.5133 8.12 30.84 7.08 30.84C6.04 30.84 5.21334 30.5133 4.60001 29.86C3.98667 29.1933 3.68001 28.32 3.68001 27.24V10.76C3.68001 9.67999 3.98667 8.81332 4.60001 8.15999C5.21334 7.49332 6.04 7.15999 7.08 7.15999C8.12 7.15999 8.94667 7.49332 9.56001 8.15999C10.1733 8.81332 10.48 9.67999 10.48 10.76V11.96H14.28V10.76C14.28 8.53332 13.6267 6.74665 12.32 5.39999C11.0133 4.03999 9.26667 3.35999 7.08 3.35999C4.90667 3.35999 3.16001 4.03999 1.84 5.39999C0.533338 6.74665 -0.119995 8.53332 -0.119995 10.76V27.24C-0.119995 29.4533 0.533338 31.24 1.84 32.6C3.16001 33.96 4.90667 34.64 7.08 34.64C9.26667 34.64 11.0133 33.96 12.32 32.6C13.6267 31.24 14.28 29.4533 14.28 27.24V26.04Z" fill="white"/>
                <path d="M20.1147 41.2H23.8747L32.0947 12.2H28.1547L23.9947 28.12L19.7547 12.2H15.8347L22.0547 34.3L20.1147 41.2Z" fill="white"/>
                <path d="M42.8116 34.5C43.9049 34.5 44.8982 34.26 45.7916 33.78C46.6982 33.3 47.4249 32.5467 47.9716 31.52C48.5182 30.48 48.7916 29.1467 48.7916 27.52V18.66C48.7916 17.0333 48.5182 15.7067 47.9716 14.68C47.4249 13.6533 46.6982 12.9 45.7916 12.42C44.8982 11.94 43.9049 11.7 42.8116 11.7C41.0249 11.7 39.6316 12.2933 38.6316 13.48V3.99998H35.0316V34H38.6316V32.72C39.1116 33.28 39.6982 33.7133 40.3916 34.02C41.0982 34.34 41.9049 34.5 42.8116 34.5ZM41.8916 30.9C40.8649 30.9 40.0649 30.5933 39.4916 29.98C38.9182 29.3667 38.6316 28.5533 38.6316 27.54V18.66C38.6316 17.6467 38.9182 16.8333 39.4916 16.22C40.0649 15.6067 40.8649 15.3 41.8916 15.3C42.9316 15.3 43.7382 15.6067 44.3116 16.22C44.8982 16.8333 45.1916 17.6467 45.1916 18.66V27.52C45.1916 28.5333 44.8982 29.3533 44.3116 29.98C43.7382 30.5933 42.9316 30.9 41.8916 30.9Z" fill="white"/>
                <path d="M59.9444 34.5C62.011 34.5 63.671 33.84 64.9244 32.52C66.191 31.2 66.8244 29.4667 66.8244 27.32V26.92H63.2244V27.52C63.2244 28.5333 62.931 29.3533 62.3444 29.98C61.771 30.5933 60.9711 30.9 59.9444 30.9C58.931 30.9 58.1244 30.5933 57.5244 29.98C56.9244 29.3533 56.6244 28.5333 56.6244 27.52V23.82H66.8244V18.86C66.8244 16.7133 66.191 14.9867 64.9244 13.68C63.671 12.36 62.011 11.7 59.9444 11.7C57.8777 11.7 56.2044 12.36 54.9244 13.68C53.6577 14.9867 53.0244 16.7133 53.0244 18.86V27.32C53.0244 29.4667 53.6577 31.2 54.9244 32.52C56.2044 33.84 57.8777 34.5 59.9444 34.5ZM59.9444 15.3C60.9711 15.3 61.771 15.6067 62.3444 16.22C62.931 16.8333 63.2244 17.6467 63.2244 18.66V20.42H56.6244V18.66C56.6244 17.6467 56.9244 16.8333 57.5244 16.22C58.1244 15.6067 58.931 15.3 59.9444 15.3Z" fill="white"/>
                <path d="M71.4378 34H75.0378V18.78C75.0378 17.7667 75.3245 16.9733 75.8978 16.4C76.4845 15.8267 77.2712 15.54 78.2578 15.54H80.1978V11.94H79.2378C77.4511 11.94 76.0512 12.5467 75.0378 13.76V12.2H71.4378V34Z" fill="white"/>
                <path d="M92.5466 34H96.3466V22.3H99.9466C100.867 22.3 101.593 22.5733 102.127 23.12C102.673 23.6667 102.947 24.3933 102.947 25.3V34H106.747V25.3C106.747 23.3267 105.96 21.84 104.387 20.84C105.96 19.5467 106.747 17.7 106.747 15.3V11C106.747 8.89332 106.127 7.19999 104.887 5.91999C103.66 4.63998 102.013 3.99998 99.9466 3.99998H92.5466V34ZM96.3466 18.5V7.79999H99.9466C100.867 7.79999 101.593 8.09332 102.127 8.67999C102.673 9.26665 102.947 10.04 102.947 11V15.3C102.947 16.26 102.673 17.0333 102.127 17.62C101.593 18.2067 100.867 18.5 99.9466 18.5H96.3466Z" fill="white"/>
                <path d="M118.538 34.5C120.605 34.5 122.265 33.84 123.518 32.52C124.785 31.2 125.418 29.4667 125.418 27.32V18.86C125.418 16.7133 124.785 14.9867 123.518 13.68C122.265 12.36 120.605 11.7 118.538 11.7C116.471 11.7 114.798 12.36 113.518 13.68C112.251 14.9867 111.618 16.7133 111.618 18.86V27.32C111.618 29.4667 112.251 31.2 113.518 32.52C114.798 33.84 116.471 34.5 118.538 34.5ZM118.538 30.9C117.525 30.9 116.718 30.5933 116.118 29.98C115.518 29.3533 115.218 28.5333 115.218 27.52V18.66C115.218 17.6467 115.518 16.8333 116.118 16.22C116.718 15.6067 117.525 15.3 118.538 15.3C119.565 15.3 120.365 15.6067 120.938 16.22C121.525 16.8333 121.818 17.6467 121.818 18.66V27.52C121.818 28.5333 121.525 29.3533 120.938 29.98C120.365 30.5933 119.565 30.9 118.538 30.9Z" fill="white"/>
                <path d="M136.429 34.5C138.495 34.5 140.155 33.84 141.409 32.52C142.675 31.2 143.309 29.4667 143.309 27.32V26.92H139.709V27.52C139.709 28.5333 139.415 29.3533 138.829 29.98C138.255 30.5933 137.455 30.9 136.429 30.9C135.415 30.9 134.609 30.5933 134.009 29.98C133.409 29.3533 133.109 28.5333 133.109 27.52V18.66C133.109 17.6467 133.409 16.8333 134.009 16.22C134.609 15.6067 135.415 15.3 136.429 15.3C137.455 15.3 138.255 15.6067 138.829 16.22C139.415 16.8333 139.709 17.6467 139.709 18.66V19.26H143.309V18.86C143.309 16.7133 142.675 14.9867 141.409 13.68C140.155 12.36 138.495 11.7 136.429 11.7C134.362 11.7 132.689 12.36 131.409 13.68C130.142 14.9867 129.509 16.7133 129.509 18.86V27.32C129.509 29.4667 130.142 31.2 131.409 32.52C132.689 33.84 134.362 34.5 136.429 34.5Z" fill="white"/>
                <path d="M147.336 34H150.936V25.08L152.796 22.64L158.116 34H161.916L155.156 19.46L160.696 12.18H156.896L150.936 19.74V3.99998H147.336V34Z" fill="white"/>
                <path d="M170.921 34.5C172.988 34.5 174.648 33.84 175.901 32.52C177.168 31.2 177.801 29.4667 177.801 27.32V26.92H174.201V27.52C174.201 28.5333 173.908 29.3533 173.321 29.98C172.748 30.5933 171.948 30.9 170.921 30.9C169.908 30.9 169.101 30.5933 168.501 29.98C167.901 29.3533 167.601 28.5333 167.601 27.52V23.82H177.801V18.86C177.801 16.7133 177.168 14.9867 175.901 13.68C174.648 12.36 172.988 11.7 170.921 11.7C168.854 11.7 167.181 12.36 165.901 13.68C164.634 14.9867 164.001 16.7133 164.001 18.86V27.32C164.001 29.4667 164.634 31.2 165.901 32.52C167.181 33.84 168.854 34.5 170.921 34.5ZM170.921 15.3C171.948 15.3 172.748 15.6067 173.321 16.22C173.908 16.8333 174.201 17.6467 174.201 18.66V20.42H167.601V18.66C167.601 17.6467 167.901 16.8333 168.501 16.22C169.101 15.6067 169.908 15.3 170.921 15.3Z" fill="white"/>
                <path d="M190.574 34.26H192.274V30.66H190.574C189.561 30.66 188.754 30.3333 188.154 29.68C187.568 29.0267 187.274 28.16 187.274 27.08V15.54H192.274V12.18H187.274V6.79999H183.674V12.18H179.874V15.54H183.674V27.08C183.674 29.2933 184.301 31.0467 185.554 32.34C186.808 33.62 188.481 34.26 190.574 34.26Z" fill="white"/>
                <path d="M219.358 26.04H215.558V27.24C215.558 28.32 215.251 29.1933 214.638 29.86C214.025 30.5133 213.198 30.84 212.158 30.84C211.118 30.84 210.291 30.5133 209.678 29.86C209.065 29.1933 208.758 28.32 208.758 27.24V10.76C208.758 9.67999 209.065 8.81332 209.678 8.15999C210.291 7.49332 211.118 7.15999 212.158 7.15999C213.198 7.15999 214.025 7.49332 214.638 8.15999C215.251 8.81332 215.558 9.67999 215.558 10.76V11.96H219.358V10.76C219.358 8.53332 218.705 6.74665 217.398 5.39999C216.091 4.03999 214.345 3.35999 212.158 3.35999C209.985 3.35999 208.238 4.03999 206.918 5.39999C205.611 6.74665 204.958 8.53332 204.958 10.76V27.24C204.958 29.4533 205.611 31.24 206.918 32.6C208.238 33.96 209.985 34.64 212.158 34.64C214.345 34.64 216.091 33.96 217.398 32.6C218.705 31.24 219.358 29.4533 219.358 27.24V26.04Z" fill="white"/>
                <path d="M229.983 34.5C232.05 34.5 233.71 33.84 234.963 32.52C236.23 31.2 236.863 29.4667 236.863 27.32V18.86C236.863 16.7133 236.23 14.9867 234.963 13.68C233.71 12.36 232.05 11.7 229.983 11.7C227.917 11.7 226.243 12.36 224.963 13.68C223.697 14.9867 223.063 16.7133 223.063 18.86V27.32C223.063 29.4667 223.697 31.2 224.963 32.52C226.243 33.84 227.917 34.5 229.983 34.5ZM229.983 30.9C228.97 30.9 228.163 30.5933 227.563 29.98C226.963 29.3533 226.663 28.5333 226.663 27.52V18.66C226.663 17.6467 226.963 16.8333 227.563 16.22C228.163 15.6067 228.97 15.3 229.983 15.3C231.01 15.3 231.81 15.6067 232.383 16.22C232.97 16.8333 233.263 17.6467 233.263 18.66V27.52C233.263 28.5333 232.97 29.3533 232.383 29.98C231.81 30.5933 231.01 30.9 229.983 30.9Z" fill="white"/>
                <path d="M241.594 34H245.194V18.78C245.194 17.7667 245.481 16.9733 246.054 16.4C246.641 15.8267 247.427 15.54 248.414 15.54H250.354V11.94H249.394C247.607 11.94 246.207 12.5467 245.194 13.76V12.2H241.594V34Z" fill="white"/>
                <path d="M253.157 41.2H256.757V32.72C257.237 33.28 257.823 33.7133 258.517 34.02C259.223 34.34 260.03 34.5 260.937 34.5C262.03 34.5 263.023 34.26 263.917 33.78C264.823 33.3 265.55 32.5467 266.097 31.52C266.643 30.48 266.917 29.1467 266.917 27.52V18.66C266.917 17.0333 266.643 15.7067 266.097 14.68C265.55 13.6533 264.823 12.9 263.917 12.42C263.023 11.94 262.03 11.7 260.937 11.7C259.15 11.7 257.757 12.2933 256.757 13.48V12.2H253.157V41.2ZM260.017 30.9C258.99 30.9 258.19 30.5933 257.617 29.98C257.043 29.3667 256.757 28.5533 256.757 27.54V18.66C256.757 17.6467 257.043 16.8333 257.617 16.22C258.19 15.6067 258.99 15.3 260.017 15.3C261.057 15.3 261.863 15.6067 262.437 16.22C263.023 16.8333 263.317 17.6467 263.317 18.66V27.52C263.317 28.5333 263.023 29.3533 262.437 29.98C261.863 30.5933 261.057 30.9 260.017 30.9Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_8592_1189">
                  <rect width="270" height="44" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </a>
        </Link>
      </div>
      <div>
        <nav>
          <ul className={'flex items-center justify-center lg:gap-x-5 gap-x-2'}>
            <li className={'cursor-pointer hover:opacity-80'}>
              <Link href={'/'}>
                <a href={'/'}>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 8C14.2692 8 8 14.2692 8 22C8 29.7308 14.2692 36 22 36C29.7308 36 36 29.7308 36 22C36 14.2692 29.7336 8 22 8ZM14.9076 22.4704L14.9664 22.3752L18.6092 16.6772C18.6624 16.596 18.7884 16.6044 18.8276 16.694C19.4352 18.0576 19.9616 19.7544 19.7152 20.81C19.6116 21.244 19.3232 21.832 18.9984 22.3752C18.9564 22.4536 18.9116 22.532 18.8612 22.6076C18.8388 22.6412 18.7996 22.6608 18.7576 22.6608H15.014C14.9132 22.6608 14.8544 22.5516 14.9076 22.4704ZM31.1392 24.4304C31.1392 24.4836 31.1084 24.5284 31.0636 24.548C30.7808 24.6684 29.8148 25.1136 29.4144 25.6708C28.3896 27.096 27.6084 29.1344 25.8584 29.1344H18.5616C15.9744 29.1344 13.88 27.0316 13.88 24.436V24.352C13.88 24.2848 13.936 24.2288 14.006 24.2288H18.0716C18.1528 24.2288 18.2116 24.3016 18.206 24.3828C18.1752 24.646 18.2256 24.9176 18.3516 25.164C18.5924 25.654 19.0936 25.9592 19.634 25.9592H21.6472V24.3884H19.6564C19.5556 24.3884 19.494 24.2708 19.5528 24.1868C19.5752 24.1532 19.5976 24.1196 19.6256 24.0804C19.8132 23.8116 20.082 23.3972 20.3508 22.924C20.5328 22.6048 20.7092 22.2632 20.852 21.9216C20.88 21.86 20.9024 21.7956 20.9276 21.734C20.9668 21.6248 21.006 21.5212 21.034 21.4204C21.062 21.3336 21.0872 21.244 21.1096 21.16C21.1768 20.8688 21.2048 20.5608 21.2048 20.2416C21.2048 20.1156 21.1992 19.984 21.188 19.8608C21.1824 19.7236 21.1656 19.5864 21.1488 19.4492C21.1376 19.3288 21.1152 19.2084 21.0928 19.0852C21.062 18.9032 21.0228 18.7212 20.978 18.5392L20.9612 18.4692C20.9276 18.3432 20.8968 18.2256 20.8576 18.0996C20.7428 17.7076 20.614 17.324 20.474 16.9656C20.4236 16.8228 20.3676 16.6856 20.3088 16.5512C20.2248 16.344 20.138 16.1564 20.0596 15.98C20.0176 15.8988 19.984 15.826 19.9504 15.7504C19.9112 15.6664 19.872 15.5824 19.83 15.5012C19.802 15.4396 19.7684 15.3808 19.746 15.3248L19.4996 14.8712C19.466 14.8096 19.522 14.734 19.5892 14.7536L21.1292 15.1708H21.1348C21.1376 15.1708 21.1376 15.1708 21.1404 15.1708L21.342 15.2296L21.566 15.2912L21.6472 15.3136V14.4008C21.6472 13.9584 22 13.6 22.4396 13.6C22.658 13.6 22.8568 13.6896 22.9968 13.8352C23.1396 13.9808 23.2292 14.1796 23.2292 14.4008V15.7588L23.3944 15.8036C23.4056 15.8092 23.4196 15.8148 23.4308 15.8232C23.47 15.8512 23.5288 15.896 23.6016 15.952C23.6604 15.9968 23.722 16.0528 23.7948 16.1116C23.9432 16.232 24.1224 16.386 24.3156 16.5624C24.366 16.6072 24.4164 16.652 24.464 16.6996C24.7132 16.932 24.9932 17.2036 25.262 17.506C25.3376 17.5928 25.4104 17.6768 25.486 17.7692C25.5588 17.8616 25.64 17.9512 25.7072 18.0408C25.7996 18.1612 25.8948 18.2872 25.9816 18.4188C26.0208 18.4804 26.0684 18.5448 26.1048 18.6064C26.2168 18.7716 26.312 18.9424 26.4044 19.1132C26.4436 19.1916 26.4828 19.2784 26.5164 19.3624C26.62 19.592 26.7012 19.8244 26.7516 20.0596C26.7684 20.11 26.7796 20.1632 26.7852 20.2136V20.2248C26.802 20.292 26.8076 20.3648 26.8132 20.4404C26.8356 20.6784 26.8244 20.9192 26.774 21.16C26.7516 21.2608 26.7236 21.356 26.69 21.4596C26.6536 21.5576 26.62 21.6584 26.5752 21.7564C26.4884 21.9552 26.3876 22.1568 26.2672 22.3416C26.228 22.4116 26.1804 22.4844 26.1356 22.5544C26.0852 22.6272 26.032 22.6972 25.9872 22.7644C25.9228 22.8512 25.8556 22.9408 25.7856 23.022C25.724 23.106 25.6624 23.19 25.5924 23.2656C25.4972 23.3804 25.4048 23.4868 25.3068 23.5904C25.2508 23.6576 25.1892 23.7276 25.1248 23.7892C25.0632 23.8592 24.9988 23.9208 24.9428 23.9768C24.8448 24.0748 24.7664 24.1476 24.6992 24.212L24.5396 24.3548C24.5172 24.3772 24.4864 24.3884 24.4556 24.3884H23.2292V25.9592H24.772C25.1164 25.9592 25.444 25.8388 25.71 25.612C25.7996 25.5336 26.1944 25.192 26.662 24.6768C26.6788 24.6572 26.6984 24.646 26.7208 24.6404L30.9796 23.4084C31.0608 23.386 31.1392 23.4448 31.1392 23.5288V24.4304Z" fill="white"/>
                  </svg>
                </a>
              </Link>
            </li>
            <li className={'cursor-pointer hover:opacity-80'}>
              <Link href={'/'}>
                <a href={'/'}>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.7042 13.7355C29.9253 12.9238 28.0064 12.3359 26.0034 12C25.9614 12 25.9334 12.014 25.9053 12.042C25.6532 12.4759 25.3871 13.0357 25.191 13.4696C23.0339 13.1477 20.8909 13.1477 18.7899 13.4696C18.6078 13.0217 18.3277 12.4759 18.0755 12.042C18.0615 12.014 18.0195 12 17.9915 12C15.9885 12.3359 14.0696 12.9378 12.2907 13.7355C12.2767 13.7355 12.2627 13.7495 12.2487 13.7635C8.62092 19.0961 7.62644 24.3028 8.11668 29.4394C8.11668 29.4674 8.13068 29.4954 8.1587 29.5094C10.5399 31.245 12.865 32.2947 15.1341 32.9945C15.1761 33.0085 15.2041 32.9945 15.2321 32.9665C15.7644 32.2387 16.2546 31.4829 16.6608 30.6711C16.6889 30.6291 16.6608 30.5731 16.6188 30.5451C15.8625 30.2652 15.1341 29.9153 14.4338 29.5234C14.3777 29.4954 14.3777 29.4114 14.4197 29.3835C14.5598 29.2715 14.7139 29.1595 14.854 29.0475C14.882 29.0335 14.91 29.0195 14.938 29.0335C19.5182 31.091 24.4907 31.091 29.0149 29.0335C29.0429 29.0195 29.0849 29.0195 29.1129 29.0475C29.253 29.1595 29.393 29.2715 29.5471 29.3835C29.6031 29.4254 29.5891 29.4954 29.5331 29.5234C28.8328 29.9293 28.1044 30.2652 27.348 30.5451C27.292 30.5591 27.278 30.6151 27.306 30.6711C27.7262 31.4689 28.2025 32.2387 28.7347 32.9525C28.7627 32.9805 28.7908 32.9945 28.8328 32.9805C31.1159 32.2807 33.441 31.231 35.8362 29.5094C35.8502 29.4954 35.8642 29.4674 35.8782 29.4394C36.4665 23.491 34.8977 18.3403 31.7322 13.7635C31.7322 13.7635 31.7182 13.7495 31.7042 13.7355ZM17.3472 26.3183C15.9605 26.3183 14.8259 25.0726 14.8259 23.547C14.8259 22.0214 15.9465 20.7757 17.3472 20.7757C18.7619 20.7757 19.8824 22.0354 19.8684 23.547C19.8684 25.0726 18.7479 26.3183 17.3472 26.3183ZM26.6617 26.3183C25.275 26.3183 24.1405 25.0726 24.1405 23.547C24.1405 22.0214 25.261 20.7757 26.6617 20.7757C28.0764 20.7757 29.197 22.0354 29.1829 23.547C29.1829 25.0726 28.0764 26.3183 26.6617 26.3183Z" fill="white"/>
                  </svg>
                </a>
              </Link>
            </li>
            <li className={'cursor-pointer hover:opacity-80'}>
              <Link href={'/'}>
                <a href={'/'}>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.9729 13.2831C36.0561 13.1641 35.9332 13.0104 35.8002 13.0633C34.8546 13.4397 33.8663 13.6936 32.8582 13.8188C33.9807 13.1302 34.8468 12.082 35.3271 10.841C35.376 10.7146 35.2416 10.6017 35.1256 10.6675C34.0824 11.2591 32.9573 11.6851 31.7886 11.9304C31.7397 11.9407 31.6893 11.9236 31.6549 11.8864C30.7779 10.9361 29.6234 10.3033 28.3649 10.0847C27.0799 9.86145 25.759 10.0825 24.6096 10.7131C23.4601 11.3438 22.547 12.3484 22.0134 13.5694C21.5061 14.7304 21.3692 16.0245 21.6194 17.2673C21.6388 17.3637 21.5653 17.4548 21.4696 17.4487C19.1957 17.3037 16.974 16.6826 14.9413 15.6229C12.9138 14.5658 11.1183 13.0953 9.66436 11.3021C9.59983 11.2225 9.47753 11.2328 9.43051 11.3244C8.97808 12.206 8.7412 13.1886 8.74185 14.1873C8.74001 15.1814 8.97758 16.1605 9.43341 17.0376C9.88923 17.9146 10.5492 18.6622 11.3545 19.214C10.5004 19.1901 9.66308 18.9733 8.90154 18.5802C8.8034 18.5295 8.68568 18.6017 8.69078 18.7143C8.75017 20.0252 9.21879 21.3411 10.0299 22.3508C10.8931 23.4252 12.0912 24.1605 13.4216 24.4322C12.9095 24.5923 12.3778 24.6766 11.8425 24.6828C11.5512 24.6793 11.2605 24.6573 10.9719 24.6168C10.865 24.6017 10.7776 24.7061 10.8151 24.8101C11.2119 25.9119 11.9129 26.8734 12.8346 27.5752C13.82 28.3256 15.0086 28.7418 16.2352 28.7661C14.164 30.4395 11.6069 31.3529 8.97153 31.3605C8.70073 31.3614 8.43005 31.3524 8.16001 31.3335C8.00784 31.3228 7.93785 31.531 8.06902 31.6109C10.6368 33.1757 13.5717 34.0028 16.5653 33.9991C18.7755 34.0226 20.9682 33.5937 23.0152 32.7374C25.0622 31.881 26.9225 30.6144 28.4874 29.0115C30.0524 27.4086 31.2906 25.5015 32.1298 23.4017C32.969 21.3019 33.3923 19.0514 33.375 16.7817V16.0744C33.375 16.0278 33.3965 15.9841 33.4326 15.956C34.4063 15.2011 35.2626 14.2998 35.9729 13.2831Z" fill="white"/>
                  </svg>
                </a>
              </Link>
            </li>
            <li className={'cursor-pointer hover:opacity-80'}>
              <Link href={'/'}>
                <a href={'/'}>
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 17.0584C19.2662 17.0584 17.0501 19.2708 17.0501 22C17.0501 24.7292 19.2662 26.9416 22 26.9416C24.7337 26.9416 26.9499 24.7292 26.9499 22C26.9499 19.2708 24.7337 17.0584 22 17.0584Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.0337 8.43947C19.2854 7.85351 24.7146 7.85351 29.9663 8.43947C32.8576 8.76208 35.1897 11.0364 35.5291 13.933C36.157 19.2927 36.157 24.7073 35.5291 30.067C35.1897 32.9636 32.8576 35.2379 29.9663 35.5605C24.7146 36.1465 19.2854 36.1465 14.0337 35.5605C11.1424 35.2379 8.8103 32.9636 8.47094 30.067C7.84302 24.7073 7.84302 19.2927 8.47094 13.933C8.8103 11.0364 11.1424 8.76208 14.0337 8.43947ZM29.6152 12.8771C28.7741 12.8771 28.0922 13.5578 28.0922 14.3976C28.0922 15.2373 28.7741 15.918 29.6152 15.918C30.4564 15.918 31.1383 15.2373 31.1383 14.3976C31.1383 13.5578 30.4564 12.8771 29.6152 12.8771ZM14.7655 22C14.7655 18.0112 18.0045 14.7777 22 14.7777C25.9955 14.7777 29.2345 18.0112 29.2345 22C29.2345 25.9888 25.9955 29.2223 22 29.2223C18.0045 29.2223 14.7655 25.9888 14.7655 22Z" fill="white"/>
                  </svg>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
