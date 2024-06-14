import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface SharedState {
    [key: string]: any;
}

interface SharedContextProps {
    state: SharedState;
    getData: () => SharedState;
    insertData: (data: { key: string; val: any }) => void;
    sendGetRequest: (target: string) => Promise<any>;
    sendGetRequestWithToken: (target: string, token: string) => Promise<any>;
    sendPostRequest: (target: string, data: any) => Promise<any>;
    sendPostRequestWithToken: (target: string, token: string, data: any) => Promise<any>;
    sendPutRequest: (target: string, data: any) => Promise<any>;
    sendPatchRequest: (target: string, data: any) => Promise<any>;
    sendDeleteRequest: (target: string) => Promise<any>;
    sendDeleteRequestWithToken: (target: string, token: string) => Promise<any>;
    downloadFile: (url: string) => Promise<Blob>;
    downloadFileWithToken: (target: string, token: string) => Promise<Blob>;
}

const initialState: SharedState = {};

const SharedContext = createContext<SharedContextProps | undefined>(undefined);

const sharedReducer = (state: SharedState, action: { type: string; payload: any }): SharedState => {
    switch (action.type) {
        case 'SET_DATA':
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

const handleError = (error: AxiosError) => {
    if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Response error:', error.response.status, error.response.data);
    } else if (error.request) {
        // Request was made but no response was received
        console.error('Request error:', error.request);
    } else {
        // Something happened in setting up the request
        console.error('Error:', error.message);
    }
};

export const SharedProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(sharedReducer, initialState);

    const getData = (): SharedState => {
        const storedData = localStorage.getItem('sharedData@voicelinx');
        const data = JSON.parse(storedData || '{}');
        dispatch({ type: 'SET_DATA', payload: data });
        return data;
    };

    const insertData = (data: { key: string; val: any }) => {
        const updatedData = { ...state, [data.key]: data.val };
        dispatch({ type: 'SET_DATA', payload: updatedData });
        localStorage.setItem('sharedData@voicelinx', JSON.stringify(updatedData));
    };

    const sendGetRequest = async (target: string): Promise<any> => {
        try {
            const response: AxiosResponse<any> = await axios.get(`${process.env.REACT_APP_API_URL}${target}`);
            return response.data;
        } catch (error) {
            handleError(error as AxiosError);
            throw error;
        }
    };

    const sendGetRequestWithToken = async (target: string, token: string): Promise<any> => {
        try {
            const response: AxiosResponse<any> = await axios.get(`${process.env.REACT_APP_API_URL}${target}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            handleError(error as AxiosError);
            throw error;
        }
    };

    const sendPostRequest = async (target: string, data: any): Promise<any> => {
        try {
            const response: AxiosResponse<any> = await axios.post(`${process.env.REACT_APP_API_URL}${target}`, data);
            return response.data;
        } catch (error) {
            handleError(error as AxiosError);
            throw error;
        }
    };

    const sendPostRequestWithToken = async (target: string, token: string, data: any): Promise<any> => {
        try {
            const response: AxiosResponse<any> = await axios.post(`${process.env.REACT_APP_API_URL}${target}`, data, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            handleError(error as AxiosError);
            throw error;
        }
    };

    const sendPutRequest = async (target: string, data: any): Promise<any> => {
        try {
            const response: AxiosResponse<any> = await axios.put(`${process.env.REACT_APP_API_URL}${target}`, data);
            return response.data;
        } catch (error) {
            handleError(error as AxiosError);
            throw error;
        }
    };

    const sendPatchRequest = async (target: string, data: any): Promise<any> => {
        try {
            const response: AxiosResponse<any> = await axios.patch(`${process.env.REACT_APP_API_URL}${target}`, data);
            return response.data;
        } catch (error) {
            handleError(error as AxiosError);
            throw error;
        }
    };

    const sendDeleteRequest = async (target: string): Promise<any> => {
        try {
            const response: AxiosResponse<any> = await axios.delete(`${process.env.REACT_APP_API_URL}${target}`);
            return response.data;
        } catch (error) {
            handleError(error as AxiosError);
            throw error;
        }
    };

    const sendDeleteRequestWithToken = async (target: string, token: string): Promise<any> => {
        try {
            const response: AxiosResponse<any> = await axios.delete(`${process.env.REACT_APP_API_URL}${target}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            handleError(error as AxiosError);
            throw error;
        }
    };

    const downloadFile = async (url: string): Promise<Blob> => {
        try {
            const response: AxiosResponse<Blob> = await axios.get(url, { responseType: 'blob' });
            return response.data;
        } catch (error) {
            handleError(error as AxiosError);
            throw error;
        }
    };

    const downloadFileWithToken = async (target: string, token: string): Promise<Blob> => {
        try {
            const response: AxiosResponse<Blob> = await axios.get(`${process.env.REACT_APP_API_URL}${target}`, {
                responseType: 'blob',
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            handleError(error as AxiosError);
            throw error;
        }
    };

    return (
        <SharedContext.Provider
            value={{
                state,
                getData,
                insertData,
                sendGetRequest,
                sendGetRequestWithToken,
                sendPostRequest,
                sendPostRequestWithToken,
                sendPutRequest,
                sendPatchRequest,
                sendDeleteRequest,
                sendDeleteRequestWithToken,
                downloadFile,
                downloadFileWithToken,
            }}
        >
            {children}
        </SharedContext.Provider>
    );
};

export const useSharedService = (): SharedContextProps => {
    const context = useContext(SharedContext);
    if (!context) {
        throw new Error('useSharedService must be used within a SharedProvider');
    }
    return context;
};
