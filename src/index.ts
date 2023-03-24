function component() {
    const element = document.createElement('div');

    element.innerHTML = '<div>V</div>';
    console.log('loaded')
    return element;
  }

  document.body.appendChild(component());