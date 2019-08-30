

class NavigationActionsClass {

    setNavigator(navigator) {
      this.navigator = navigator
    }

    push = (params) => this.navigator && this.navigator.push(params)
    pop = (params) => this.navigator && this.navigator.pop(params)
    resetTo = (params) => this.navigator && this.navigator.resetTo(params)
    toggleDrawer = (params) => this.navigator && this.navigator.toggleDrawer(params)
    navigate = (routerName) => {
        console.log('Router Name', routerName);
        console.log(this.navigator);
        this.navigator && this.navigator.navigate(routerName)
    }
}

export let NavigationActions = new NavigationActionsClass()