<template>
    <div class="services">
        <div class="services-head">
            <div class="s-head-layout box">
                <div class="s-head-logo" v-if="service.logo">
                    <div class="logo-box">
                        <div class="logo-box-bg"
                             :style="'background-image: url('+urlImage + 'services/' + service.logo+')'">
                        </div>
                    </div>
                </div>
                <div class="s-head-box">
                    <div class="s-head-name">
                        <div class="s-head-title">
                            {{service.title}}
                        </div>
                        <div class="s-head-reviews" v-if="service.assessmentRecommend">
                            <el-rate
                                v-model="service.assessmentRecommend"
                                disabled>
                            </el-rate>
                            <div>(161 отзывов)</div>
                        </div>
                    </div>
                    <div class="s-head-action">
                        <button type="button" class="t-button bookmark">В закладки</button>
                        <button type="button" class="t-button dark">Пробный период</button>
                        <button type="button" class="t-button site-link link">Сайт</button>
                    </div>
                    <div class="s-head-share">
                        <social-share
                            :titleService="service.title"
                            :desc="service.desc"
                            :hashtags="service.professions"
                        />
                    </div>
                </div>
            </div>
            <div class="s-head-menu box">
                <a href="#desc" class="link active">Описание</a>
                <a href="#" class="link">Цена</a>
                <a href="#" class="link">Функции</a>
                <a href="#" class="link">Обзор</a>
                <a href="#" class="link">Кейсы</a>
            </div>
        </div>

        <div class="page">
            <div class="services-content box">
                <h2 class="services-title left" id="desc">Описание</h2>

                <div class="services-two service-main">
                    <div class="services-two_item">
                        <div class="services-prof">
                            <div class="services-prof-title">
                                Для кого?
                            </div>
                            <div class="services-prof-content">
                                <div v-for="item in professionsFormat"
                                     class="prof-box"
                                     @click="filterProfession(item)">
                                    {{item}}
                                </div>
                            </div>
                        </div>
                        <div class="services-text-content">
                            <div v-if="service.content">
                                {{service.content}}
                            </div>
                            <div v-else>
                                {{service.desc}}
                            </div>
                        </div>
                        <div class="services-info">
                            <div class="services-info-box">
                                <div class="services-info-title">Цена</div>
                                <div class="services-info-text">
                                    <span v-if="service.priceStart === '0'">Бесплатно</span>
                                    <span v-else>{{service.priceStart}}</span>
                                </div>
                            </div>
                            <div class="services-info-box">
                                <div class="services-info-title">Пробный период</div>
                                <div class="services-info-text">
                                    <a :href="service.testPeriodLink"
                                       v-if="service.testPeriodLink"
                                       class="services-period"
                                       target="_blank">Получить</a>
                                    <span v-else>Нет</span>
                                </div>
                            </div>
                            <div  class="services-info-box">
                                <div class="services-info-title">Доступные языки</div>
                                <div class="services-languages">
                                    <div v-for="item in languages"
                                         :class="'services-languages-box t-lang-icon ' + item ">
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="services-two_item bg-white">
                        <div class="services-media">
                            <div v-if="service.linkVideo && service.linkVideo !== 'null'" class="services-video">
                                <iframe width="560" height="280"
                                        :src="service.linkVideo" frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope;
                                    picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div class="services-gallery">
                                <gallery-items
                                    :item0="service.image0"
                                    :item1="service.image1"
                                    :item2="service.image2"
                                    :item3="service.image3"
                                    :item4="service.image4"
                                    :item5="service.image5"
                                    :item6="service.image6"
                                    :item7="service.image7"
                                    :item8="service.image8"
                                    :item9="service.image9"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="service.features" class="services-features">
                    <h2 class="services-title">Особенности {{service.title}}</h2>


                    <div v-for="(item, index) in service.features" :key="`item-${index}`"
                         class="cat-list-item service-features-box">
                        <div class="cat-title"
                             v-b-toggle="`collapse-${item.id}`"
                             variant="primary"
                        >{{item.title}} </div>
                        <b-collapse
                            :id="`collapse-${item.id}`"
                            class="mt-2">
                            <div class="cat-content">
                                <div v-if="item.list.length > 0"
                                     class="services-features-content">
                                    <div v-for="list in item.list" class="services-features-list">
                                        {{list}}
                                    </div>
                                </div>
                                <div v-else class="services-features-content">
                                    {{item.desc}}
                                </div>

                            </div>
                        </b-collapse>
                    </div>

                </div>

            </div>
        </div>
        <div class="page-white">
            <div class="services-tech box">
                <h2 class="services-title" id="tech">Техническая информация</h2>
                <div class="services-two">
                    <div class="services-two_item">
                        <div class="services-tech-box">
                            <div class="services-tech-title">Система на которую устанавливается</div>
                            <div class="services-tech-content">
                                <div v-for="icon in systems"
                                    :class="'services-tech-icon tech-icon ' + icon">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="services-two_item">
                        <div class="services-tech-links-box">
                            <div class="services-tech-link">
                                <a href="#" target="_blank">Кейсы</a>
                            </div>
                            <div class="services-tech-link">
                                <a href="#" target="_blank">API</a>
                            </div>
                            <div class="services-tech-link">
                                <a href="#" target="_blank">Инструкция по использованию</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="services-similar box">
                <h2 class="services-title">Похожие</h2>
                <similar />
                <div class="services-similar-btn">
                    <button type="button" class="t-button blue-border">Смотреть все аналоги</button>
                </div>
            </div>
            <div class="services-assessment box">
                <h2 class="services-title">Оценка пользователя в целом</h2>
                <div class="services-assessment-box">

                    <div class="services-assessment-box_item">
                        <div class="services-assessment-title">
                            В целом
                        </div>
                        <div class="services-assessment-stars">
                            <el-rate
                                v-model="assessment.all"
                                :colors="colors">
                            </el-rate>
                            <span class="services-assessment-text"> {{assessment.all}}/5</span>
                        </div>
                    </div>
                    <div class="services-assessment-box_item">
                        <div class="services-assessment-title">
                            Простота использования
                        </div>
                        <div class="services-assessment-stars">
                            <el-rate
                                v-model="assessment.use"
                                :colors="colors">
                            </el-rate>
                            <span class="services-assessment-text"> {{assessment.use}}/5</span>
                        </div>
                    </div>
                    <div class="services-assessment-box_item">
                        <div class="services-assessment-title">
                            Обслуживание клиентов
                        </div>
                        <div class="services-assessment-stars">
                            <el-rate
                                v-model="assessment.support"
                                :colors="colors">
                            </el-rate>
                            <span class="services-assessment-text"> {{assessment.support}}/5</span>
                        </div>
                    </div>
                </div>
                <div class="services-assessment-btn">
                    <button type="button" class="t-button blue">Оставить отзыв</button>
                </div>
            </div>
        </div>
        <div class="services-reviews">

        </div>



    </div>
</template>

<script>
    const baseUrl = process.env.baseUrlImage;
    import socialShare from "~/components/base/social/share.vue";
    import GalleryItems from "~/components/base/media/GalleryItems.vue";
    import Similar from "~/components/services/Similar.vue";
    export default {
        name: "services_index",
        components: {socialShare,GalleryItems, Similar},
        data(){
            return {
                urlImage: baseUrl,
                colors: ['#99A9BF', '#F7BA2A', '#FF9900'], //rate
                professionsFormat: [],
                languages: [],
                systems: [],
                loadFull: false,
                assessment: {
                    all: 4,
                    use: 4,
                    support: 3
                }
            }
        },
        created() {
            this.$store.dispatch('data/services/GET_SERVICE_ITEM', this.$route.params.id);
        },
        methods: {
            getData(){
                this.loadFull = true;
                this.formationArray(this.service.professions, 'professions');
                this.formationArray(this.service.languages, 'languages');
                this.formationArray(this.service.systemInstall, 'systems');
            },
            formationArray(str, type){
                if(str){
                    let mas = [],
                        j = 0;
                    for (let i = 0; i < str.length; i++) {
                        if (str[i] == ",") { j++; continue; }
                        else {
                            mas[j] ? mas[j] += str[i] : mas[j] = str[i];
                        }
                    }
                    if(type === 'professions'){
                        this.professionsFormat = mas;
                    } else if(type === 'languages') {
                        this.languages = mas;
                    } else if(type === 'systems'){
                        this.systems = mas;
                    }
                }
            },
            filterProfession(profession){

            }
        },
        watch: {
            service () {
                this.getData()
            },
        },
        computed: {
            service() {
                return this.$store.state.data.services.serviceItem;
            },
        }
    }
</script>

<style scoped>

</style>
