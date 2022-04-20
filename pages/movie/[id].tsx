import { useState, FC } from 'react'
import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring';




interface Movie {
    data: {
        id: number
        original_title: string
        imdb_id: string
    }
}

const Post: React.FC<Movie> = ({ data }) => {

    const [movie, setMovie] = useState(data)

    console.log(data);
    const router = useRouter()
    const { id } = router.query
    return (
        <div>Post: {id}
            <div>name: {movie.original_title}</div>
        </div>
    )
}

type Props = {
    post: PostData
 }
 
 interface Params extends ParsedUrlQuery {
    id: string,
 }

 export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}
 
 export const getStaticProps: GetStaticProps<Movie, Params> = async (context) => {
    const params = context.params!       // ! is a non-null assertion 
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=348dcf1948c61f6be83ca1d5a90f3ffe&language=en-US`)
    const data = await res.json()
    return {
       props: { data }
    }
 }



// export const getStaticPaths: GetStaticPaths = async () => {
//     // const { id } = params;
//     // Fetch data from external API
//     const res = await fetch(`https://api.themoviedb.org/3/movie/123?api_key=348dcf1948c61f6be83ca1d5a90f3ffe&language=en-US`)
//     const data = await res.json()

//     // console.log(data);

//     // Pass data to the page via props
//     return { props: { data } }
// }

// export const getStaticProps: GetStaticProps = async (context) => {
//     const { slug } = context.params as IParams // no longer causes error
//     const props = fetch(`/api/${slug}`)
//     return { props }
// }

export default Post;