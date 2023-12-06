export class SortingArray<T> extends Array<T> {

    public sortingSteps: Array<Array<T>>

    public constructor(input: T[]) {
        super(...input);
        this.sortingSteps = [[...input]]
        return this.createArrayProxy(this)
    }

    private createArrayProxy = (input: SortingArray<T>): SortingArray<T> => {
        const arrayChangeHandler: ProxyHandler<SortingArray<T>> = {
            set(target, prop, val) { // to intercept property writing
                const index = parseInt(prop.toString());
                if (!isNaN(index)) {
                    target[index] = val;
                    input.sortingSteps.push([...target])
                    return true;
                } else {
                    return false;
                }
            }
        };
        return new Proxy(input, arrayChangeHandler)
    }
}



