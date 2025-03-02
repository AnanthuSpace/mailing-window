import axios, {
    AxiosResponse,
    AxiosError,
    InternalAxiosRequestConfig,
} from "axios";

const localhostURL: string = "http://localhost:4000";

interface CustomAxiosRequestConfig
    extends InternalAxiosRequestConfig<any> {
    _retry?: boolean;
}

const userAxiosInstance = axios.create({
    baseURL: localhostURL,
});

userAxiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> => {
        const accessToken = sessionStorage.getItem("userAccessToken");
        if (accessToken) {
            if (!config.headers) {
                config.headers = {} as any;
            }
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error: any): Promise<any> => Promise.reject(error)
);

userAxiosInstance.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => response,
    async (error: AxiosError): Promise<any> => {
        const originalRequest = error.config as CustomAxiosRequestConfig;
        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;
            const refreshToken = sessionStorage.getItem("userRefreshToken");
            try {
                const response = await axios.post(
                    `${localhostURL}/auth/refresh-token`,
                    { refreshToken },
                    { headers: { "Content-Type": "application/json" } }
                );
                const newAccessToken = response.data.accessToken;
                sessionStorage.setItem("userAccessToken", newAccessToken);
                if (!originalRequest.headers) {
                    originalRequest.headers = {} as any;
                }
                originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                return axios(originalRequest);
            } catch (refreshError) {
                sessionStorage.removeItem("userAccessToken");
                sessionStorage.removeItem("userRefreshToken");
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export default userAxiosInstance;
