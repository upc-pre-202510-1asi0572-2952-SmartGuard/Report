<template>
    <div class="flex flex-col md:flex-row h-full min-h-screen bg-gray-100">
        <SideBar class="w-full md:w-[15%]" />

        <main class="w-full lg:w-[85%] mx-auto p-6 bg-gray-200 flex flex-col gap-10 text-black">

            <div class="flex flex-col gap-10 max-w-5xl mx-auto w-full"> <div class="flex flex-col md:flex-row justify-between items-start gap-10"> <div class="flex flex-col gap-2"> <h1 class="text-2xl font-semibold">Estadísticas</h1>
                        <span class="text-gray-600">Resumen de actividad y estadísticas del sistema asegurador</span>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-4 md:gap-10"> <Select v-model="homeSelected" :options="homes" optionLabel="name"
                            placeholder="Selecciona un Hogar" class="w-full md:w-56" />
                        <Select v-model="diaSelected" :options="dias" optionLabel="name" placeholder="Selecciona un período"
                            class="w-full md:w-56" />
                    </div>
                </div>

                <div class="flex flex-wrap justify-center sm:justify-start gap-4"> <div
                        class="rounded-2xl px-4 py-2 flex flex-col justify-center items-center gap-2 border-2 border-gray-300 min-w-[150px] flex-grow sm:flex-grow-0">
                        <h3 class="text-5xl font-bold text-blue-600">{{ Accesos }}</h3> <span class="text-gray-600">Accesos</span>
                    </div>

                    <div
                        class="rounded-2xl px-4 py-2 flex flex-col justify-center items-center gap-2 border-2 border-gray-300 min-w-[150px] flex-grow sm:flex-grow-0">
                        <h3 class="text-5xl font-bold text-green-600">{{ Miembros }}</h3>
                        <span class="text-gray-600">Miembros</span>
                    </div>

                    <div
                        class="rounded-2xl px-4 py-2 flex flex-col justify-center items-center gap-2 border-2 border-gray-300 min-w-[150px] flex-grow sm:flex-grow-0">
                        <h3 class="text-5xl font-bold text-purple-600">{{ Dispositivos }}</h3>
                        <span class="text-gray-600">Dispositivos</span>
                    </div>

                    <div
                        class="rounded-2xl px-4 py-2 flex flex-col justify-center items-center gap-2 border-2 border-gray-300 min-w-[150px] flex-grow sm:flex-grow-0">
                        <h3 class="text-5xl font-bold text-red-600">{{ Incidentes }}</h3>
                        <span class="text-gray-600">Incidentes</span>
                    </div>
                </div>


                <div class="flex flex-col lg:flex-row justify-between gap-10 items-start"> <div class="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md flex-1 min-w-[300px]"> <h2 class="text-lg font-semibold">Accesos por día</h2>
                        <Chart type="line" :data="chartData1" :options="chartOptions1" class="w-full h-[300px]" /> </div>

                    <div class="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md flex-1 min-w-[300px]">
                        <h2 class="text-lg font-semibold">Accesos por miembro</h2>
                        <Chart type="doughnut" :data="chartData2" :options="chartOptions2" class="w-full h-[300px] md:w-[30rem]" /> </div>

                </div>

            </div>


        </main>
    </div>

</template>

<script>
import SideBar from '../components/home/SideBar.vue';
import Select from 'primevue/dropdown';
import Chart from 'primevue/chart';

export default {
    components: {
        SideBar,
        Select, 
        Chart
    },
    data() {
        return {
            chartData2: null, 
            chartOptions2: null,

            chartData1: null,
            chartOptions1: null, 

            Accesos: 24,
            Miembros: 3,
            Dispositivos: 1,
            Incidentes: 3,

            homeSelected: null,
            homes: [
                { name: 'Bogotá' },
                { name: 'Medellín' },
                { name: 'Cali' },
            ],

            diaSelected: null,
            dias: [
                { name: '30 días' },
                { name: '20 días' },
                { name: '10 días' },
                { name: '7 días' },
                { name: '1 días' },
            ]
        }
    },
    mounted() {
        this.chartData1 = this.setChartData1();
        this.chartOptions1 = this.setChartOptions1();

        this.chartData2 = this.setChartData2();
        this.chartOptions2 = this.setChartOptions2();
    },
    methods: {
        setChartData1() {
            const documentStyle = getComputedStyle(document.documentElement);

            return {
                labels: ['Día 1', 'Día 2', 'Día 3', 'Día 4', 'Día 5', 'Día 6', 'Día 7'], 
                datasets: [
                    {
                        label: 'Accesos',
                        data: [0, 3, 4, 6, 5, 8, 6], 
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--p-blue-500') || '#3B82F6',
                        tension: 0.4
                    },
                ]
            };
        },
        setChartOptions1() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color') || '#333333';
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color') || '#6B7280';
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color') || '#D1D5DB';

            return {
                responsive: true, 
                maintainAspectRatio: false,
                aspectRatio: 1.5,
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: textColor
                        }
                    },
                    tooltip: {
                        enabled: true
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    }
                }
            };
        },

        setChartData2() {
            const documentStyle = getComputedStyle(document.body);

            return {
                labels: ['Miembro A', 'Miembro B', 'Miembro C'],
                datasets: [
                    {
                        data: [70, 20, 10],
                        backgroundColor: [
                            documentStyle.getPropertyValue('--p-blue-500') || '#3B82F6',
                            documentStyle.getPropertyValue('--p-lightgray-400') || '#BFDBFE',
                            documentStyle.getPropertyValue('--p-orange-500') || '#F97316'
                        ],
                        hoverBackgroundColor: [
                            documentStyle.getPropertyValue('--p-blue-400') || '#60A5FA',
                            documentStyle.getPropertyValue('--p-lightgray-300') || '#93C5FD',
                            documentStyle.getPropertyValue('--p-orange-400') || '#FB923C'
                        ]
                    }
                ]
            };
        },
        setChartOptions2() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color') || '#333333';

            return {
                responsive: true,
                maintainAspectRatio: false, 
                cutout: '70%', 
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: textColor
                        }
                    },
                    tooltip: {
                        enabled: true
                    }
                }
            };
        }
    }
}
</script>

<style>
</style>