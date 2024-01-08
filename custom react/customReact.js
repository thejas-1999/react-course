function mainContainer(reactelement, container) {
  /*  const domElement = document.createElement(reactelement.type);
  domElement.innerHTML = reactelement.children;
  domElement.setAttribute("href", reactelement.props.href);
  domElement.setAttribute("target", reactelement.props.target);
  container.appendchild(domelement); */
}

const reactelement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },

  children: "Click me to visit google",
};

const mainContainer = document.getElementById("root");

custmRender(reactelement, mainContainer);
