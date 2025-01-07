import api from "@/lib/axios";

export default {
    getByYear(initQuantity, year, interest) {
        return api('/year', {
            params: {
                capitalInicial: initQuantity,
                interes: interest,
                anios: year
            }
        })
    }
}