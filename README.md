# loading-Components-bakelab
A react loading components for food website.


## Documentation



## Usage/Examples

```javascript
import Loading from '@expitc/loading-component-bakelab'

function App() {
  return <Loading text='text here' theme='dark' isLoading='true'/>
}
```




## Reference

#### Props

| Parameter | Type     | Description |Default|
| :-------- | :------- | :-----------|:-----------|
| text | `string` | you can put costume text here| `Our staff is prepare best Ingredients to serve~`|
|theme|`string`: `light \| dark`| light follow the header main theme, dark follow the footer main theme|`light`|
|isLoading|`boolean \| number`| for number value must less than 100 , above 100 will be ignore|`true`|
