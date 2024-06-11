export function NavBar(navBar) {
    
    const color = "#C9ADA7";

    navBar.innerHTML = /*html*/ 
    `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="${color}"><path d="M9.95242 9.62272L11.5109 6.31816C11.711 5.89395 12.289 5.89395 12.4891 6.31816L14.0476 9.62272L17.5329 10.1559C17.9801 10.2243 18.1583 10.7996 17.8346 11.1296L15.313 13.7001L15.9081 17.3314C15.9845 17.7978 15.5168 18.1534 15.1167 17.9331L12 16.2177L8.88328 17.9331C8.48316 18.1534 8.01545 17.7978 8.09187 17.3314L8.68695 13.7001L6.16545 11.1296C5.8417 10.7996 6.01993 10.2243 6.46711 10.1559L9.95242 9.62272Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 12L23 12" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 2V1" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 23V22" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 20L19 19" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 4L19 5" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 20L5 19" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 4L5 5" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 12L2 12" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="mailto:dannikavalerio@gmail.com">
                    <?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="${color}"><path d="M7 9L12 12.5L17 9" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" stroke="${color}" stroke-width="1.5"></path></svg>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://www.linkedin.com/in/dannika-kate-valerio/">
                    <?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="${color}"><path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 17V13.5V10" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 7.01L7.01 6.99889" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://github.com/dannikate">
                    <?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="${color}"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9183C5.99999 14.4366 8.19999 15.2091 10.2933 15.4622C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </a>
            </li>
            <!--
            <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
            -->
            </ul>
        </div>
        </div>
    </nav>
    `;
}
