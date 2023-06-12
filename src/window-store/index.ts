import { Observable } from 'windowed-observable';





export const Observe = (nameSpace: string) => {
    const observable = new Observable(nameSpace);

    const observer = (ninja: any) => console.log(ninja);

    observable.subscribe(observer);

    observable.publish('Uzumaki Naruto');

    return {
        observable
    }
}







