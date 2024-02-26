import './ArticleDetail.scss'

function ArticleDetail() {
  return (
    <section className="articleDetail">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12">
                    <div className="articleDetail_creator">
                        <img src="/assets/images/user1.jpg" alt="creator-img" className="articleDetail_creator_img" />
                        <h6 className="articleDetail_creator_name">نیلوفر تقی زاده</h6>
                        <span className="articleDetail_creator_date">15 مرداد 1401</span>
                        <span className="articleDetail_creator_time">15 دقیقه زمان مطالعه</span>
                    </div>
                </div>
                <div className="col-lg-9 col-md-8 col-sm-12">
                    <div className="articleDetail_content">
                        <div className="articleDetail_time_category">
                            <span className="articleDetail_time">40روز پیش</span>
                            |
                            <span className="articleDetail_category">طراحی وب</span>
                        </div>
                        <h4 className="articleDetail_content_title">10 اشتباه برنامه‌نویسان Backend (بخش دوم)</h4>
                        <p className="articleDetail_content_paraph">طبیعی است که ابتدا بخواهید طراحی را برای جدیدترین و بهترین مرورگرها انجام دهید. این مفهومی به نام تنزل مطلوب است، بدان معنی که شما ابتدا آن را برای جدیدترین مرورگرها و پشتیبانی از جدیدترین تکنولوژی‌ها می‌سازید. سپس وب‌سایت را برای مرورگرهایی که قدرتمند و پشتیبان‌کننده نیستند آماده می‌سازید. این یک رویکرد از بالا به پایین است که در بالا شما جدیدترین و بهترین مرورگرها را دارید. سپس به سمت مرورگرهای کم‌توان و سطح پایین بروید و مطمئن شوید که سایت تا حد امکان با آن‌ها خوب کار می‌کند.</p>
                        <p className="articleDetail_content_paraph">
                        با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div>
                </div>
                <div className="col-12">
                    <div className="articleDetail_items">
                        <ul className="articleDetail_item">
                            <li>بهبود پیش‌رونده و طراحی وب ریسپانسیو</li>
                            <li>برای اتصال این دو می‌خواهم در مورد بهبود پیش‌رونده و طراحی وب تلفن همراه صحبت کنم. دلیلی وجود دارد</li>
                            <li>فلسفه بهبود پیش‌رونده</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ArticleDetail