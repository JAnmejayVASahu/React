function Render(reactElement, continer){
    
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // continer.appendChild(domElement)

    /* version 2 */
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop == 'children'){
            continue;
        }domElement.setAttribute(prop, reactElement.props[prop])
    }
    continer.appendChild(domElement);
}


const reactElement = {
    type: 'a',
    props:{
        href: "https://google.com",
        target: "_blank"
    },
    children: 'Click me to visit google'
}

const mainCountainer = document.querySelector(`#root`);

Render(reactElement, mainCountainer);