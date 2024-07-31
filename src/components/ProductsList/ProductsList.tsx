import * as S from './styles'
import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { IProduct, ProductCard } from '../ProductCard/ProductCard'


export const ProductsList: React.FC = () => {
    const [ productsList, setProductsList ] = useState([] as IProduct[])

    const apiResponse = async () => {
        try {
            const response: AxiosResponse<IProduct[], []> = await axios.get('https://fakestoreapi.com/products')

            setProductsList(response.data)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        apiResponse()
    }, [])

    return(
        <S.Container>
            {productsList.map(( product ) => (
                <ProductCard key={ product.id } product={ product }/>
            ))}
        </S.Container>
    )
}