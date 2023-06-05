import ServiceElement from './ServiceElement';
import Layout from '@/pages/layout';
export default function ServiceElements() {
  return (
    <Layout>
    <div>
      <div className="articles-container  ">
        <div className="row justify-content-center m-30">
          <div className=" col-sm-12 col-md-10 m-30">
            <ServiceElement />
            </div>
           </div>
         </div>
      </div>
      </Layout>
  )
}
